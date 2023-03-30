import { ethers } from 'ethers';
import React, { useState } from 'react';

function WalletCard() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connectBtnText, setConnectBtnText] = useState('Connect Wallet');

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: 'eth_requestAccounts',
        })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage('Install MetaMask');
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: 'eth_getBalance', params: [address, 'latest'] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
        setUserBalance(balance);
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };

  const sendTransaction = async (e) => {
    let params = [
      {
        from: '0x90fF30656Bd91eBECC89B736D181CF7FB2625AD1',
        // to: '0x90fF30656Bd91eBECC89B736D181CF7FB2625AD1',
        to: e.target.to_address.value,
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
        value: Number(1000000000000000).toString(16),
      },
    ];

    let result = await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params,
      })
      .catch((err) => console.log(err));
  };

  const productPicker = async (e) => {
    let salesValue;
    if (e.target.product_form.value === 'product1') {
      salesValue = 1000000000000000;
    }
    if (e.target.product_form.value === 'product2') {
      salesValue = 2000000000000000;
    }
    if (e.target.product_form.value === 'product3') {
      salesValue = 3000000000000000;
    }
    // gaslimit, adress, value;
    let params = [
      {
        from: '0x90fF30656Bd91eBECC89B736D181CF7FB2625AD1',
        to: '0x90fF30656Bd91eBECC89B736D181CF7FB2625AD1',
        // to: e.target.to_address.value,
        gas: Number(21000).toString(16),
        gasPrice: Number(2500000).toString(16),
        value: Number(salesValue).toString(16),
      },
    ];

    let result = await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params,
      })
      .catch((err) => console.log(err));
  };

  // if user switches the wallet then it will update accordingly
  window.ethereum.on('accountsChanged', accountChangedHandler);

  // if user switches the wallet then it will reload the page;
  window.ethereum.on('chainChanged', chainChangedHandler);

  return (
    <div className='walletCard'>
      <h4>{'connection to MetaMask using window.ethereum methods'}</h4>
      <button onClick={connectWalletHandler}>{connectBtnText}</button>
      <div className='accountDisplay'>
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className='balanceDisplay'>
        <h3>Balance: {userBalance}</h3>
      </div>

      <form onSubmit={sendTransaction}>
        <label>Enter Transaction Address</label>
        <input type='text' name='to_address' placeholder='Address' />
        <input type='submit' value={'Submit'} />
      </form>
      <hr></hr>
      <form onSubmit={productPicker}>
        <label>Pick your product:</label>
        <select value={'product_form'} id='product_form'>
          <option value={'product1'}>Product1</option>
          <option value={'product2'}>Product2</option>
          <option value={'product3'}>Product3</option>
        </select>
        <input type='submit' value={'Submit'} />
      </form>
      {errorMessage}
    </div>
  );
}

export default WalletCard;

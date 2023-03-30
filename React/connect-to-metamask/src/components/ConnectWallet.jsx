import React, { useState } from 'react';
import '../App.css';

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');
  console.log(walletAddress);

  // Request access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...');

    // check if Meta Mask Extension exists
    if (window.ethereum) {
      console.log('detected');

      try {
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(account[0]);
      } catch (error) {
        console.log('Error connecting');
      }
    } else {
      console.log('Meta Mask not detected');
    }
  }

  async function connectWallet() {
    if (typeof window.ethereum !== undefined) {
      await requestAccount();

      // eslint-disable-next-line no-undef
      const provider = new ethers.provider.Web3Provider(window.ethereum);
      // use this provider to doing smart contract
    }
  }
  return (
    <div>
      <header className='App-header'>
        <button onClick={requestAccount}>Connect Wallet</button>
        <h3>Wallet Address: {walletAddress}</h3>
      </header>
    </div>
  );
}

export default ConnectWallet;

import React, { useState } from 'react';

function ConnectWalletA() {
  const [accountAddress, setAccountAddress] = useState('');
  async function getAccount() {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const account = accounts[0];
    return account;
  }

  const connectMeta = async () => {
    if (typeof window !== 'undefined') {
      const data = await getAccount();
      // console.log(data);
      setAccountAddress(data);
    }
  };
  return (
    <div>
      <h1>Connect your Metamask Wallet</h1>
      {accountAddress && <p> Connected Your Wallet is: {accountAddress} </p>}
      <button onClick={connectMeta}>Connect</button>
    </div>
  );
}

export default ConnectWalletA;

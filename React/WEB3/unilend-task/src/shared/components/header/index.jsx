import { Button, Card, Menu, message } from 'antd';
import React, { useState } from 'react';
import './index.scss';
import { ethers } from 'ethers';
import { dispatch } from '../../../rootStore/store';
import { walletActions } from '../store/reducer';
import { useSelector } from 'react-redux';
import Logo from '../../icons/Logo';

function Header() {
  const [connectStatus, setConnectStatus] = useState('disconnected');
  const [errorMessage, setErrorMessage] = useState('');

  const { balance } = useSelector((state) => state?.wallet);
  const { address } = useSelector((state) => state?.wallet);

  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: `Connected to the wallet`,
    });
  };
  const throwError = () => {
    messageApi.open({
      type: 'error',
      // content: `${errorMessage ? errorMessage : 'Failed to connect wallet'}`,
      content: 'Failed to connect wallet',
    });
  };

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      setConnectStatus('connecting');
      try {
        const account = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        //
        console.log('VAL', account);
        accountChangedHandler(account[0]);
        success();
        setConnectStatus('connected');
      } catch (error) {
        throwError();
        setConnectStatus('disconnected');
      }
    } else {
      setErrorMessage('Meta Mask not detected');
    }
  };

  const getUserBalance = async (address) => {
    //
    try {
      const balance = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest'],
      });
      dispatch(walletActions.setBalance(ethers.utils.formatEther(balance)));
    } catch (error) {
      console.log('ERROR1', error);
    }
  };

  const accountChangedHandler = (newAccount) => {
    getUserBalance(newAccount.toString());
    dispatch(walletActions.setAddress(newAccount));
  };

  // if user switches the wallet then it will update accordingly
  window.ethereum.on('accountsChanged', accountChangedHandler);

  // if user switches the wallet then it will reload the page;
  // const chainChangedHandler = () => {
  //   window.location.reload();
  // };
  // window.ethereum.on('chainChanged', chainChangedHandler);

  const getShortAddress = (address) => {
    return (
      address.substr(0, 4) +
      '...' +
      address.substr(address.length - 4, address.length - 1)
    );
  };
  return (
    <div className='header'>
      {/* <Menu mode='horizontal'>
        <Menu.Item key='logo'>
          LOGO
        </Menu.Item>
        <Menu.Item key='connect'>
          <Button>Primary Button</Button>
        </Menu.Item>
      </Menu> */}
      {contextHolder}
      <div className='LogoIcon'>
        <Logo />
      </div>
      {connectStatus === 'connected' ? (
        // <Card mode='horizontal' className='balanceCard'>
        <div className='balanceCard'>
          <Button type='primary'>{balance} ETH</Button>
          <Button type='primary'>{getShortAddress(address)}</Button>
        </div>
      ) : (
        // </Card>
        <Button
          onClick={connectWalletHandler}
          loading={connectStatus === 'connecting'}
        >
          {connectStatus === 'connecting' ? 'connecting...' : 'connect'}
        </Button>
      )}
    </div>
  );
}

export default Header;

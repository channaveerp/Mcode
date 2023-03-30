import { Alert, Button, Form, Modal, message, Input } from 'antd';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './index.scss';
import { Space, Typography } from 'antd';
import TransactionDetails from './transactions';
import SendForm from './sendForm';
const { Text, Link, Title } = Typography;

/* Importing the Title component from the antd library. */
// import Title from 'antd/es/typography/Title';

// const data = {
//   to_address: '',
//   to_balance: '',
// };
function Dashboard() {
  const { balance } = useSelector((state) => state?.wallet);
  const { address } = useSelector((state) => state?.wallet);
  const [showAlert, setShowAlert] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  // const [form, setForm] = useState(data);

  console.log('Store_Balance', balance);
  console.log('Store_address', address);
  console.log('paymentSuccess', paymentSuccess);
  // console.log('FROM', form);

  // const formData = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // };

  // const getTransactionHistory = () => {
  //   // let address = '0x1DF2727Ff34d2BD09ACd3aF576a6dC20De1xxxxx';
  //   // let address1 = address;
  //   let etherscanProvider = new ethers.providers.EtherscanProvider();

  //   etherscanProvider.getHistory(address).then((history) => {
  //     history.forEach((tx) => {
  //       console.log(tx);
  //     });
  //   });
  // };

  const [messageApi, contextHolder] = message.useMessage();
  // const success = () => {
  //   messageApi.open({
  //     type: 'success',
  //     content: 'This is a success message',
  //   });
  // };
  const throwWarning = () => {
    messageApi.open({
      type: 'warning',
      content: 'Please connect to the wallet',
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    if (address === '') {
      // setShowAlert(true);
      throwWarning();
    } else {
      setIsModalOpen(true);
    }
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const api = 'https://goerli.infura.io/v3/cc75fe1364f24987a12955bf51c49a73';
    //
    // const provider = new ethers.providers.EtherscanProvider(api);
    const provider = new ethers.providers.JsonRpcProvider(
      'https://goerli.infura.io/v3/cc75fe1364f24987a12955bf51c49a73'
    );
    provider
      .getTransactionCount(address)
      .then((res) => console.log('COUNT', res));
    // provider
    //   .getHistory(address)
    //   .then((res) => console.log('HISTROY', res))
    //   .catch((error) => console.log('HISTORY_ERROR', error));
  }, []);

  return (
    <div className='dashboard'>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Title level={4}>Write Heading here</Title>
          <Text>Write description here</Text>
        </div>
        {/* <Button onClick={makePayment}>Payment</Button> */}
        <Button type='primary' onClick={showModal}>
          Payment
        </Button>
        <Modal
          title='Basic Modal'
          open={isModalOpen}
          footer={null}
          // onOk={handleOk}
          onCancel={handleCancel}
        >
          <SendForm />
        </Modal>
      </div>
      <Title level={4}>Transaction History</Title>
      <div className='transactionsContainer'>
        <TransactionDetails />
        <TransactionDetails />
      </div>
      Address: {address}, balance: {balance}
      {contextHolder}
      {/* <Space>
        <Button onClick={success}>Success</Button>
        <Button onClick={error}>Error</Button>
      </Space> */}
      {/* {showAlert && (
        <Alert
          message='Warning not connected to wallet'
          type='warning'
          showIcon
          closable={() => setShowAlert(false)}
        />
      )} */}
      {/* <Button onClick={makePayment}>Make Payment</Button>
      <form onSubmit={makePayment}>
        <label>Enter Transaction Address</label>
        <h3>Enter transaction details</h3>
        <input
          onChange={formData}
          type='text'
          name='to_address'
          placeholder='address'
        />
        <input
          onChange={formData}
          type='text'
          name='to_balance'
          placeholder='balance'
        />
        <input type='submit' value={'Submit'} />
      </form>
      <Button onClick={getTransactionHistory}>History</Button> */}
    </div>
  );
}

export default Dashboard;

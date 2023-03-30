import React from 'react';
import { Card, Typography } from 'antd';
const { Text, Title } = Typography;

function TransactionDetails() {
  const transactions = [
    {
      id: '1',
      asset: 'asset',
      amount: '0.01',
      action: 'action',
      claimable: '0.02',
    },
    {
      id: '2',
      asset: 'asset',
      amount: '0.01',
      action: 'action',
      claimable: '0.02',
    },
    {
      id: '3',
      asset: 'asset',
      amount: '0.01',
      action: 'action',
      claimable: '0.02',
    },
    {
      id: '4',
      asset: 'asset',
      amount: '0.01',
      action: 'action',
      claimable: '0.02',
    },
  ];
  return (
    <div>
      <Title level={5}>Payments</Title>
      <Card></Card>
    </div>
  );
}

export default TransactionDetails;

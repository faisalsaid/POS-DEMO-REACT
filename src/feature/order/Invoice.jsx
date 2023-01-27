import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from '../../components/layout/Main';
import { fetchAllOrder } from './sliceOrder';
import { Stack, Typography, Box, Divider } from '@mui/material';
import InvoiceCardList from './InvoiceCardList';

const Invoice = () => {
  const { isLoading, data: allOrders, error } = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  // console.log(allOrders);

  useEffect(() => {
    dispatch(fetchAllOrder());
  }, []);
  return (
    <Main title="Invoice">
      <Stack
        sx={{
          // width: '100%',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
        direction={'row'}
        spacing={2}
      >
        {allOrders
          .filter((order) => order.isPaidOff === false)
          .map((order, index) => {
            return <InvoiceCardList order={order} key={index} />;
          })}
      </Stack>
    </Main>
  );
};

export default Invoice;

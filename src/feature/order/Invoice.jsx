import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Main from '../../components/layout/Main';
import { fetchAllOrder } from './sliceOrder';
import { Stack, Typography, Box } from '@mui/material';

const Invoice = () => {
  const { isLoading, data: allOrders, error } = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  console.log(allOrders);

  useEffect(() => {
    dispatch(fetchAllOrder());
  }, []);
  return (
    <Main>
      <Stack direction={'row'} spacing={2}>
        {allOrders
          .filter((order) => order.isPaidOff === false)
          .map((order, index) => {
            return (
              <Box key={index}>
                <Typography>{order.customer}</Typography>
                <Typography>{order.totalAmount}</Typography>
              </Box>
            );
          })}
      </Stack>
    </Main>
  );
};

export default Invoice;

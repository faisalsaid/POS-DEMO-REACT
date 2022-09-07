import React from 'react';
import { Box, Typography, Stack, TextField, Button, Divider } from '@mui/material';

import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

const initalValues = {
  orderRef: '',
  customer: '',
  orderList: [],
  totalAmount: 0,
};

const validationSchma = yup.object({
  orderRef: yup.string().required('Required'),
  customer: yup.string().required('Required').min(3, 'Min 3 character'),
  orderList: yup.array().required(),
  totalAmount: yup.number().required(),
});

const onSubmit = () => {};

const OrderForm = () => {
  const listOrder = useSelector((state) => state.order.listOrder);

  return (
    <>
      <Box
        sx={{
          padding: '.5rem',
          backgroundColor: 'success.dark',
        }}
      >
        <Typography color={'white'} variant="body" component={'div'}>
          Order List
        </Typography>
      </Box>
      <Stack
        sx={{
          padding: '.8rem',
        }}
        spacing={1}
      >
        <TextField size="small" label="Order Ref" name="order-ref" id="order-ref" type={'text'} defaultValue={'2345-XDR-1208'} disabled />
        <TextField color="success" size="small" label="Customer" name="customer" id="customer" type={'text'} />
        <Box
          sx={{
            width: '100%',
            backgroundColor: 'whitesmoke',
            minHeight: '100px',
            height: '330px',
            padding: '.8rem',
            overflowY: 'scroll',
          }}
        >
          {listOrder.length === 0 ? (
            <p>No Order</p>
          ) : (
            listOrder.map((list, index) => (
              <p key={index}>
                {list.item.title} | {list.item.price} | {list.quantity} | <b> TOTAL :{list.item.price * list.quantity}</b>
              </p>
            ))
          )}
        </Box>
        <Divider />
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="h6" component={'div'}>
            Total Amount :
          </Typography>
          <Typography variant="h4" component={'div'}>
            Rp. 500.000,-
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent="space-between" spacing={1}>
          <Typography variant="caption">* Final Price Includes Tax</Typography>
          <Button color="success" variant="contained" size="large">
            PROCESS
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default OrderForm;

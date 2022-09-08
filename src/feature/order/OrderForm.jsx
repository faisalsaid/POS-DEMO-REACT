import React from 'react';
import { Box, Typography, Stack, TextField, Button, Divider } from '@mui/material';

import { Formik } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, bateQuantity, resetListOder, removeListOrder } from './sliceOrder';
import currencyFormatter from 'currency-formatter';

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
  const dispatch = useDispatch();
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
          <button onClick={() => dispatch(resetListOder())}>Reset</button>
          <br />

          {listOrder.length === 0 ? (
            <p>No Order</p>
          ) : (
            listOrder.map((list, index) => (
              <p key={index}>
                {list.item.title} | {list.item.price} | <button onClick={() => dispatch(bateQuantity(index))}>-</button> {list.quantity}{' '}
                <button onClick={() => dispatch(addQuantity(index))}>+</button> |<b> TOTAL :{currencyFormatter.format(list.total, { code: 'IDR' })}</b> |{' '}
                <button onClick={() => dispatch(removeListOrder(index))}>remove</button>
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
            {currencyFormatter.format(listOrder.length > 0 ? listOrder.map((order) => order.total).reduce((total, item) => total + item) : 0, { code: 'IDR' })}
          </Typography>
        </Stack>
        <Divider />
        <Stack direction={'row'} justifyContent="space-between" spacing={1}>
          <Typography variant="caption">* Final Price Includes Tax</Typography>
          <Button color="success" variant="contained">
            PROCESS
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default OrderForm;

import React from 'react';
import { Box, Typography, Stack, TextField, Button, Divider } from '@mui/material';

import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, bateQuantity, resetListOder, removeListOrder } from './sliceOrder';
import currencyFormatter from 'currency-formatter';

const OrderForm = () => {
  const dispatch = useDispatch();
  const listOrder = useSelector((state) => state.order.listOrder);

  const initialValues = {
    // ref order format [4randomstring]-[3firstcustomername]-[date]
    // exp juXu-nam-1208
    orderRef: 'juXu-nam-1208',
    customer: '',
    orderList: [],
    totalAmount: 0,
  };

  const validationSchema = yup.object({
    // orderRef: yup.string().required('Required'),
    // customer: yup.string().required('Required').min(3, 'Min 3 character'),
    // orderList: yup.array().required(),
    // totalAmount: yup.number().required(),
  });

  const onSubmit = (value, props) => {
    console.log('SUBMIT', value);
  };

  const onReset = (value, props) => {
    console.log('RESET', value);
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form>
              <Box
                sx={{
                  padding: '.5rem',
                  backgroundColor: 'success.dark',
                }}
              >
                <Typography color={'white'} variant="body" component={'div'}>
                  Order List
                </Typography>
                <Button type="reset" color="error" variant="contained">
                  Reset
                </Button>
              </Box>
              <Stack
                sx={{
                  padding: '.8rem',
                }}
                spacing={1}
              >
                <Field name="customers">
                  {({ field, form, meta }) => <TextField {...field} color="success" size="small" label="Customer" name="customer" id="customer" type={'text'} />}
                </Field>

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
                  <button type="button" onClick={() => dispatch(resetListOder())}>
                    Reset
                  </button>
                  <br />

                  {listOrder.length === 0 ? (
                    <p>No Order</p>
                  ) : (
                    listOrder.map((list, index) => (
                      <p key={index}>
                        {list.item.title} | {list.item.price} |{' '}
                        <button type="button" onClick={() => dispatch(bateQuantity(index))}>
                          -
                        </button>{' '}
                        {list.quantity}{' '}
                        <button type="button" onClick={() => dispatch(addQuantity(index))}>
                          +
                        </button>{' '}
                        |<b> TOTAL :{currencyFormatter.format(list.total, { code: 'IDR' })}</b> |{' '}
                        <button type="button" onClick={() => dispatch(removeListOrder(index))}>
                          remove
                        </button>
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
                  <Button type="submit" color="success" variant="contained">
                    PROCESS
                  </Button>
                </Stack>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default OrderForm;

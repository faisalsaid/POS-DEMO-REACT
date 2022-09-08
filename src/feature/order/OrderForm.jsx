import React from 'react';
import { Box, Typography, Stack, TextField, Button, Divider, IconButton, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, bateQuantity, resetListOder, removeListOrder } from './sliceOrder';
import currencyFormatter from 'currency-formatter';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import DeleteIcon from '@mui/icons-material/Delete';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const OrderForm = () => {
  const dispatch = useDispatch();
  const listOrder = useSelector((state) => state.order.listOrder);

  const initialValues = {
    customer: '',
  };

  const validationSchema = yup.object({
    customer: yup.string().required('Required').min(3, 'Min 3 character'),
  });

  const onSubmit = (value, props) => {
    const payload = {
      ...value,
      listOrder,
      totalAmount: listOrder.length > 0 ? listOrder.map((order) => order.total).reduce((total, item) => total + item) : 0,
      orderRef: 'ffds-nam-2012',
    };
    console.log(payload);
    props.setSubmitting(false);
    dispatch(resetListOder());
    props.resetForm({ value: '' });
  };

  const onReset = (value, props) => {
    props.setSubmitting(false);
    dispatch(resetListOder());
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit} enableReinitialize>
        {(formik) => {
          return (
            <Form>
              <Box
                sx={{
                  padding: '.5rem',
                  backgroundColor: 'success.dark',
                }}
              >
                <Stack direction={'row'} justifyContent="space-between" alignItems={'center'}>
                  <Typography color={'white'} variant="body" component={'div'}>
                    Order List
                  </Typography>
                  <Button startIcon={<RestartAltIcon />} size="small" type="reset" color="error" variant="contained">
                    Reset Order
                  </Button>
                </Stack>
              </Box>
              <Stack
                sx={{
                  padding: '.8rem',
                }}
                spacing={2}
              >
                <Field name="customer">
                  {({ field, form, meta }) => {
                    // console.log(field, form, meta);
                    return <TextField {...field} color="success" size="small" label="Customer" type={'text'} error={meta.error ? true : false} helperText={meta.error} />;
                  }}
                </Field>
                {listOrder.length > 0 && (
                  <Stack direction={'row'}>
                    <Button startIcon={<PlaylistRemoveIcon />} size="small" type="reset" color="error" variant="contained" onClick={() => dispatch(resetListOder())}>
                      Clear List
                    </Button>
                  </Stack>
                )}
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ITEM </TableCell>
                        <TableCell align="right">PRICE</TableCell>
                        <TableCell align="right">QANTITY</TableCell>
                        <TableCell align="right">TOTAL</TableCell>
                        <TableCell align="right">ACTION</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {listOrder.map((row, index) => (
                        <TableRow key={row.item.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                            {row.item.title}
                          </TableCell>
                          <TableCell align="right">{row.item.price}</TableCell>
                          <TableCell align="right">
                            <IconButton color="error" aria-label="upload picture" component="label" onClick={() => dispatch(bateQuantity(index))}>
                              <RemoveCircleIcon />
                            </IconButton>
                            <b>{row.quantity}</b>
                            <IconButton color="error" aria-label="upload picture" component="label" onClick={() => dispatch(addQuantity(index))}>
                              <AddCircleIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell align="right">{row.total}</TableCell>
                          <TableCell align="right">
                            {
                              <IconButton color="error" aria-label="upload picture" component="label" onClick={() => dispatch(removeListOrder(index))}>
                                <DeleteIcon />
                              </IconButton>
                            }
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                {/* <Box
                  sx={{
                    width: '100%',
                    backgroundColor: 'whitesmoke',
                    minHeight: '100px',
                    height: '330px',
                    padding: '.8rem',
                    overflowY: 'scroll',
                  }}
                > */}
                {/* {listOrder.length > 0 && (
                    <Button startIcon={<PlaylistRemoveIcon />} size="small" type="reset" color="error" variant="contained" onClick={() => dispatch(resetListOder())}>
                      Clear List
                    </Button>
                  )}

                  {listOrder.length === 0 ? (
                    <p>No Order</p>
                  ) : (
                    listOrder.map((list, index) => (
                      <p key={index}>
                        {list.item.title} | {list.item.price} |
                        <button type="button" onClick={() => dispatch(bateQuantity(index))}>
                          -
                        </button>{' '}
                        {list.quantity}{' '}
                        <button type="button" onClick={() => dispatch(addQuantity(index))}>
                          +
                        </button>{' '}
                        |<b> TOTAL :{currencyFormatter.format(list.total, { code: 'IDR' })}</b> |{' '}
                        <IconButton color="error" aria-label="upload picture" component="label" onClick={() => dispatch(removeListOrder(index))}>
                          <DeleteIcon />
                        </IconButton>
                      </p>
                    ))
                  )} */}
                {/* </Box> */}
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
                  <Button type="submit" color="success" variant="contained" disabled={!formik.isValid}>
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

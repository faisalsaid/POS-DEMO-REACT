import React from 'react';
import { Box, Typography, Stack, TextField, Button, Divider, IconButton, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, bateQuantity, resetListOder, removeListOrder } from './sliceOrder';
import currencyFormatter from 'currency-formatter';
import Swal from 'sweetalert2';

// icons
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

// ==========================
const getRandomSring = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getOrderRef = (costumer) => {
  const rootTime = new Date();
  const string1 = getRandomSring(5);
  const hour = rootTime.getHours();
  const minutes = rootTime.getMinutes();
  const date = rootTime.getDate();
  const month = rootTime.getMonth();
  const costumer2 = costumer.substr(0, 3);
  const code = `${string1}${costumer2}-${hour}${minutes}-${date}${month}`;
  return code;
};
// ==========================

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
    if (listOrder.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Order List Empty',
        text: `Please add some item order for ${value.customer}`,
      });
      return;
    }
    const payload = {
      ...value,
      listOrder,
      totalAmount: Math.ceil(listOrder?.map((order) => order.total).reduce((total, item) => total + item) * 1.11),
      orderRef: getOrderRef(value.customer),
      isPaidOff: false,
      tax: 1.11,
      price: listOrder?.map((order) => order.total).reduce((total, item) => total + item),
    };
    console.log(payload);
    props.setSubmitting(false);
    dispatch(resetListOder());
    props.resetForm({ value: '' });
    Swal.fire({
      icon: 'success',
      title: 'Order Create',
      text: `Order for ${value.customer} success created`,
    });
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
                    Reset
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
                          <TableCell align="right">{currencyFormatter.format(row.item.price, { code: 'IDR' })}</TableCell>
                          <TableCell align="right">
                            <IconButton color="success" aria-label="upload picture" component="label" onClick={() => dispatch(bateQuantity(index))}>
                              <RemoveCircleIcon />
                            </IconButton>
                            <b>{row.quantity}</b>
                            <IconButton color="success" aria-label="upload picture" component="label" onClick={() => dispatch(addQuantity(index))}>
                              <AddCircleIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell align="right">{currencyFormatter.format(row.total, { code: 'IDR' })}</TableCell>
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

                <Box>
                  <Stack direction={'row'} justifyContent="space-between">
                    <Typography variant="body" component={'div'}>
                      Price :
                    </Typography>
                    <Typography variant="h6" component={'div'}>
                      {currencyFormatter.format(listOrder.length > 0 ? listOrder.map((order) => order.total).reduce((total, item) => total + item) : 0, { code: 'IDR' })}
                    </Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent="space-between">
                    <Typography variant="body" component={'div'}>
                      Tax :
                    </Typography>
                    <Typography variant="h6" component={'div'}>
                      11%
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack direction={'row'} justifyContent="space-between">
                    <Typography variant="h6" component={'div'}>
                      Total Amount :
                    </Typography>
                    <Typography variant="h4" component={'div'}>
                      {currencyFormatter.format(listOrder.length > 0 ? Math.ceil(listOrder.map((order) => order.total).reduce((total, item) => total + item) * 1.11) : 0, {
                        code: 'IDR',
                      })}
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
                <Stack direction={'row'} justifyContent="space-between" spacing={1}>
                  <Typography variant="caption">* Final Price Includes Tax</Typography>
                  <Button type="submit" color="success" variant="contained" disabled={listOrder.length === 0 || !formik.isValid}>
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

import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  Stack,
  IconButton,
  Typography,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TextField,
  InputLabel,
  OutlinedInput,
  Grid,
  FormControl,
  InputAdornment,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import currencyFormatter from 'currency-formatter';
import axios from 'axios';
import Swal from 'sweetalert2';

// ICONS
import SummarizeIcon from '@mui/icons-material/Summarize';
import CloseIcon from '@mui/icons-material/Close';

function InvoiceFormProcessDialog(props) {
  const { open, onClose, data } = props;
  const [tax, setTax] = useState(0.11);
  const [taxValue, setTaxValue] = useState(tax * data.totalAmount);
  const [finalPrice, setFinalPrice] = useState(taxValue + data.totalAmount);

  const initialValues = {
    cash: 0,
  };

  const validationSchema = Yup.object({
    cash: Yup.number().required('Required'),
  });

  const updateOrder = (value) => {
    const payDate = new Date();
    const change = value.cash - (data.totalAmount * tax + data.totalAmount);
    const { id, isPaidOff, ...allData } = data;
    const payload = { tax, isPaidOff: true, finalPrice: data.totalAmount * tax + data.totalAmount, ...value, change, payDate, ...allData };

    return axios
      .put(`${process.env.REACT_APP_API_SOURCE}order/${id}`, payload)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => console.log(err.message));
  };

  const onSubmit = (value, props) => {
    onClose();
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Process',
    }).then((result) => {
      if (result.isConfirmed) {
        updateOrder(value);
        Swal.fire('Deleted!', 'Your order has been process.', 'success');
      }
    });
  };
  const onReset = (value, props) => {
    props.setSubmitting(false);
  };
  return (
    <Dialog sx={{ minWidth: '300px' }} open={open}>
      <DialogTitle sx={{ padding: '12px' }}>
        <Stack direction={'row'} spacing={1}>
          <IconButton size="small">
            <SummarizeIcon color="success" />
          </IconButton>
          <Stack direction={'row'} gap={1} divider={<Divider orientation="vertical" flexItem />}>
            <Typography variant="h6" component={'h5'}>
              {data.customer}
            </Typography>
            <Typography variant="overline" component={'p'}>
              {data.orderRef}
            </Typography>
          </Stack>
          <IconButton
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
            onClick={() => onClose()}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>

      <Divider />
      <Stack sx={{ padding: '1rem' }}>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="h5" component={'p'}>
            Total :
          </Typography>
          <Typography variant="h5" component={'p'}>
            {currencyFormatter.format(data.totalAmount, { code: 'IDR' })}
          </Typography>
        </Stack>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="body" component={'p'}>
            Tax {tax * 100} {'%'} :
          </Typography>
          <Typography variant="body" component={'p'}>
            {currencyFormatter.format(taxValue, { code: 'IDR' })}
          </Typography>
        </Stack>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="h4" component={'p'}>
            Final Price :
          </Typography>
          <Typography variant="h4" component={'p'}>
            {currencyFormatter.format(finalPrice, { code: 'IDR' })}
          </Typography>
        </Stack>
      </Stack>

      <Divider />
      <Formik initialValues={initialValues} validationSchema={validationSchema} onReset={onReset} onSubmit={onSubmit}>
        {(formik) => {
          return (
            <Form>
              <Box sx={{ padding: '.5rem', width: '500px' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Field name="cash">
                      {(data) => {
                        const { field, form, meta } = data;
                        return (
                          <FormControl fullWidth color="success">
                            <InputLabel htmlFor={'cash'}>Cash</InputLabel>
                            <OutlinedInput {...field} size="small" id="cash" startAdornment={<InputAdornment position="start">Rp.</InputAdornment>} label="Cash" type="number" />
                          </FormControl>
                        );
                      }}
                    </Field>
                  </Grid>
                </Grid>
              </Box>

              <Stack sx={{ padding: '1rem' }}>
                {formik.values.cash >= finalPrice && (
                  <Stack direction={'row'} justifyContent="space-between">
                    <Typography variant="body" component={'p'}>
                      Customer Change :
                    </Typography>
                    <Typography variant="h5" component={'p'}>
                      {currencyFormatter.format(formik.values.cash - (data.totalAmount * tax + data.totalAmount), { code: 'IDR' })}
                    </Typography>
                  </Stack>
                )}
              </Stack>
              <Divider />
              <Box sx={{ padding: '.5rem 1rem' }}>
                <Stack spacing={2} direction={'row'}>
                  <Button onClick={() => onClose()} sx={{ marginLeft: 'auto' }} variant="outlined" color="error">
                    Cancel
                  </Button>
                  {console.log(finalPrice)}
                  <Button color="success" disabled={formik.values.cash < finalPrice} type="submit" variant="contained">
                    {'Purchase '}
                  </Button>
                </Stack>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Dialog>
  );
}

export default InvoiceFormProcessDialog;

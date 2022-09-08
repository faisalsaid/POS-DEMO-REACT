import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { fetchAllMenu } from './menuSlice';
import Swal from 'sweetalert2';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Autocomplete,
  Grid,
} from '@mui/material';

// =====================================

const initialValue = {
  title: '',
  price: 0,
  isAvailable: true,
  category: '',
  image: 'https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg',
};
const validationSchema = Yup.object({
  title: Yup.string().required('Required').min(3, 'Min 3 Character'),
  price: Yup.number().required('Required'),
  category: Yup.string().required('Required'),
  isAvailable: Yup.boolean().required(),
  image: Yup.string().required('Required'),
});

// =========================================

const AddMenuFormDialog = (props) => {
  const dispatch = useDispatch();
  const {
    open,
    onClose,
    data: { title, icon, isEdit = false, menuInfo },
  } = props;

  isEdit && console.log({ menuInfo });

  const postMenu = (payload) => {
    console.log(payload);
    return axios
      .post(`${process.env.REACT_APP_API_SOURCE}menu`, payload)
      .then((resp) => {
        console.log(resp.data);
        dispatch(fetchAllMenu('all'));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been add',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => err.message);
  };

  const updateMenu = (values) => {
    const { id, ...payload } = values;
    return axios
      .put(`${process.env.REACT_APP_API_SOURCE}menu/${id}`, payload)
      .then((resp) => {
        console.log(resp);
        dispatch(fetchAllMenu('all'));
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => console.log(err.message));
  };

  const onSubmit = (values) => {
    console.log(values);
    if (isEdit) {
      updateMenu(values);
      onClose();
    } else {
      postMenu(values);

      onClose();
    }
  };

  return (
    <Dialog sx={{}} open={open}>
      <DialogTitle sx={{ padding: '12px' }}>
        <Stack direction={'row'} spacing={1}>
          <IconButton size="small">{icon}</IconButton>
          <Typography variant="h6" component={'div'} color={'primary'}>
            {title}
          </Typography>
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
      <Formik initialValues={menuInfo || initialValue} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => {
          // console.log(formik);
          const { setFieldValue } = formik;
          return (
            <>
              <Form>
                <Box
                  sx={{
                    padding: '1rem',
                    width: '500px',
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Field name={'title'}>
                        {(data) => {
                          const { field, form, meta } = data;
                          return (
                            <FormControl fullWidth>
                              <TextField
                                error={form.errors.title}
                                {...field}
                                size="small"
                                fullWidth
                                id={field.name}
                                label="Title"
                                variant="outlined"
                                aria-label="name"
                                helperText={form.errors.title && form.errors.title}
                              />
                            </FormControl>
                          );
                        }}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field name={'price'}>
                        {(data) => {
                          const { field, form, meta } = data;
                          return (
                            <FormControl fullWidth>
                              <InputLabel htmlFor={'price'}>Price</InputLabel>
                              <OutlinedInput
                                {...field}
                                size="small"
                                id="price"
                                startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
                                label="Price"
                                type="number"
                              />
                            </FormControl>
                          );
                        }}
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field>
                        {(data) => {
                          return (
                            <Autocomplete
                              {...data}
                              id="category"
                              name="category"
                              options={category}
                              getOptionLabel={(option) => option.name}
                              inputValue={data.form.values.category}
                              size={'small'}
                              onChange={(e, value) => {
                                setFieldValue('category', value !== null ? value.label : initialValue.category);
                              }}
                              renderInput={(params) => <TextField label="Category" fullWidth name="category" {...params} />}
                            />
                          );
                        }}
                      </Field>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box sx={{ padding: '.5rem 1rem' }}>
                  <Stack spacing={2} direction={'row'}>
                    <Button onClick={() => onClose()} sx={{ marginLeft: 'auto' }} variant="outlined" color="error">
                      Cancel
                    </Button>
                    <Button disabled={!formik.isValid || formik.isSubmitting} type="submit" variant="contained">
                      {isEdit ? 'Update Menu' : 'Add Menu'}
                    </Button>
                  </Stack>
                </Box>
              </Form>
            </>
          );
        }}
      </Formik>
    </Dialog>
  );
};

export default AddMenuFormDialog;

const category = [
  { label: 'food', name: 'Food' },
  { label: 'drink', name: 'Drink' },
  { label: 'snack', name: 'Snack' },
];

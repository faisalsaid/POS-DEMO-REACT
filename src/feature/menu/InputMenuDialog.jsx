import React, { useEffect, useState } from 'react';
import { makeId } from '../../utilty/utility';
import { useDispatch } from 'react-redux';
import { fetchAllMenu } from './menuSlice';
import { postMenu } from './menuSlice';
import Swal from 'sweetalert2';

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

import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const InputMenuDialog = (props) => {
  const dispatch = useDispatch();
  const {
    open,
    onClose,
    data: { title, icon, isEdit = false, menuInfo },
  } = props;

  isEdit && console.log({ menuInfo });

  const [formValue, setFormValue] = useState({
    id: '',
    title: '',
    price: 0,
    isAvailable: true,
    category: '',
    image: 'https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg',
  });

  // isEdit && setFormValue(menuInfo);

  const [menuName, setMenuName] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryValue, setCategoryValue] = useState('');
  const [categoryInputValue, setCategoryInputValue] = useState('');

  const updateMenu = (payload) => {
    const { id, ...exp } = payload;
    const newPayload = exp;
    console.log({ newPayload });
    return axios
      .put(`${process.env.REACT_APP_API_SOURCE}menu/${id}`, newPayload)
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

  const handleSubmit = (e) => {
    if (isEdit) {
      const payload = { ...formValue, title: menuName, price: parseInt(price), category: categoryValue };
      console.log({ payload });

      updateMenu(payload);
      onClose();
    } else {
      const payload = { ...formValue, title: menuName, price: parseInt(price), category: categoryValue, id: makeId(25) };
      console.log({ payload });
      dispatch(postMenu(payload));

      onClose();
    }
  };

  useEffect(() => {
    isEdit && setFormValue(menuInfo);
    isEdit && setMenuName(menuInfo.title);
    isEdit && setPrice(menuInfo.price);
  }, [isEdit]);

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
      <Box
        sx={{
          padding: '1rem',
          width: '500px',
        }}
      >
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField value={menuName} size="small" fullWidth id="name" label="Name" variant="outlined" aria-label="name" onChange={(e) => setMenuName(e.target.value)} />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <InputLabel htmlFor="price">Price</InputLabel>
                <OutlinedInput
                  size="small"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  startAdornment={<InputAdornment position="start">Rp.</InputAdornment>}
                  label="Price"
                  type="number"
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Autocomplete
                  value={categoryValue.label}
                  onChange={(e, newValue) => {
                    setCategoryValue(newValue.label);
                  }}
                  inputValue={categoryInputValue}
                  onInputChange={(e, newInputValue) => {
                    setCategoryInputValue(newInputValue);
                  }}
                  size="small"
                  disablePortal
                  id="combo-box-demo"
                  options={category}
                  renderInput={(params) => <TextField {...params} label="Category" />}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ padding: '.5rem 1rem' }}>
        <Stack spacing={2} direction={'row'}>
          <Button onClick={() => onClose()} sx={{ marginLeft: 'auto' }} variant="outlined" color="error">
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} variant="contained">
            {isEdit ? 'Edit Menu' : 'Add Menu'}
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

const category = [{ label: 'food' }, { label: 'drink' }, { label: 'snack' }];

export default InputMenuDialog;

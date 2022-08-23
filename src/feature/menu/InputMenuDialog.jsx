import React, { useEffect, useState } from 'react';
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
  FormHelperText,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  Autocomplete,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const InputMenuDialog = (props) => {
  const {
    open,
    onClose,
    data: { title, icon },
  } = props;

  const [formValue, setFormValue] = useState({
    id: 100,
    title: '',
    price: 0,
    isAvailable: true,
    category: '',
    image: '',
  });

  const [menuName, setMenuName] = useState('');
  const [price, setPrice] = useState(0);
  const [categoryValue, setCategoryValue] = useState('');
  const [categoryInputValue, setCategoryInputValue] = useState('');

  const handleSubmit = (e) => {
    setFormValue({
      ...formValue,
      title: menuName,
      price,
      category: categoryValue,
    });
    onClose();
  };

  useEffect(() => {
    console.log({ formValue });
  }, [formValue]);
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
          {/* <TextField size="small" fullWidth id="category" label="Category" variant="outlined" type={'number'} aria-label="category" /> */}
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ padding: '.5rem 1rem' }}>
        <Stack spacing={2} direction={'row'}>
          <Button onClick={() => onClose()} sx={{ marginLeft: 'auto' }} variant="outlined" color="error">
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit} variant="contained">
            Add Menu
          </Button>
        </Stack>
      </Box>
    </Dialog>
  );
};

const category = [{ label: 'food' }, { label: 'drink' }, { label: 'snack' }];

export default InputMenuDialog;

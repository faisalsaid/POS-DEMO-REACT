import React from 'react';
import { Grid, Box, Typography, Stack, TextField, Table, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const OrderMenuCard = (props) => {
  console.log(props);
  const { addOrder, index, data } = props;

  return (
    <>
      <Stack
        spacing={1}
        sx={{
          bgcolor: 'whitesmoke',
          borderRadius: '4px',
          width: '160px',
          maxWidth: '160px',
        }}
      >
        <Box sx={{ width: '100%', aspectRatio: '10/6', bgcolor: '#ddd' }}></Box>
        <Stack
          spacing={1}
          sx={{
            padding: '1rem',
          }}
        >
          <Typography variant="h6" component={'p'}>
            {'Menu Title'}
          </Typography>
          <Typography variant="body" component={'p'}>
            Rp.25.000,-
          </Typography>

          <Button onClick={() => addOrder(data)} startIcon={<AddIcon />} size="large" color="secondary" variant="contained" fullWidth>
            Order
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default OrderMenuCard;

import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const OrderMenuCard = (props) => {
  const {
    addOrder,
    data,
    data: { name, price },
  } = props;

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
          <Typography variant="body" component={'p'}>
            {name}
          </Typography>
          <Typography variant="body2" component={'p'}>
            Rp.{price},-
          </Typography>

          <Button onClick={() => addOrder(data)} startIcon={<AddIcon />} size="large" color="success" variant="contained" fullWidth>
            Order
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default OrderMenuCard;

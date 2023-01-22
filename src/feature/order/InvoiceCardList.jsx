import React from 'react';
import { Stack, Typography, Button, Divider } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import currencyFormatter from 'currency-formatter';
import { Box } from '@mui/system';

const InvoiceCardList = (props) => {
  //   console.log(props);
  const { order } = props;
  console.log(order);

  return (
    <Stack
      spacing={1}
      sx={{
        bgcolor: 'whitesmoke',
        borderRadius: '4px',
      }}
    >
      <Stack
        sx={{
          padding: '1rem',
        }}
      >
        <Stack direction={'row'} justifyContent="space-between" spacing={1}>
          <Box
            sx={{
              border: `1px solid ${order.isPaidOff ? 'green' : 'red'}`,
              padding: '.2rem 1rem',
              borderRadius: '4px',
              color: `${order.isPaidOff ? 'green' : 'red'}`,
            }}
          >
            Not Pay
          </Box>
          <Button
            sx={{
              width: '100px',
            }}
            size="small"
            onClick={() => alert(`${order.orderRef}`)}
            startIcon={<InfoIcon />}
            color="success"
            variant="outlined"
            fullWidth
          >
            Details
          </Button>
        </Stack>
        <Stack
          sx={{
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <Typography color="success" variant="caption" component={'p'}>
            Ref :
          </Typography>
          <Typography color={'success'} variant="body2" component={'p'}>
            {order.orderRef}
          </Typography>
        </Stack>
        <Divider />
        <Stack
          sx={{
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <Typography variant="caption" component={'p'}>
            Customer :
          </Typography>
          <Typography variant="body" component={'h3'}>
            {order.customer}
          </Typography>
        </Stack>
        <Divider />
        <Stack
          sx={{
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <Typography variant="caption" component={'p'}>
            Total :
          </Typography>
          <Typography variant="h5" component={'p'}>
            {currencyFormatter.format(order.totalAmount, { code: 'IDR' })}
            {/* {order.totalAmount} */}
          </Typography>
        </Stack>
        <Button variant="contained" color="success">
          Proccess
        </Button>
      </Stack>
    </Stack>
  );
};

export default InvoiceCardList;

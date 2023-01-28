import React, { useState } from 'react';
import { Stack, Typography, Button, Divider } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import currencyFormatter from 'currency-formatter';
import { Box } from '@mui/system';
import InvoiceDetailsDialog from './InvoiceDetailsDialog';

import InvoiceFormProcessDialog from './InvoiceFormProcessDialog';

const InvoiceCardList = (props) => {
  //   console.log(props);
  const { order } = props;
  //   console.log(order);
  const [openInvoiceDetails, setOpenInvoiceDetails] = useState(false);
  const [openInvoiceProcess, setOpenInvoiceProcess] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const [tax, setTax] = useState(0.11);
  const [taxValue, setTaxValue] = useState(tax * order.totalAmount);
  const [finalPrice, setFinalPrice] = useState(taxValue + order.totalAmount);

  const heandleInvoiceDetailsOpen = () => {
    setOpenInvoiceDetails(true);
    setDialogData({
      title: 'Add New Menu',
      //   icon: <FastfoodIcon color="primary" />,
    });
  };
  const heandleInvoiceDetailsClose = (fromDialog) => {
    setOpenInvoiceDetails(false);
    setDialogData({});
  };

  const heandleInvoiceProcessOpen = () => {
    setOpenInvoiceProcess(true);
    setDialogData({
      title: 'Process Invoice',
      //   icon: <FastfoodIcon color="primary" />,
    });
  };

  const openInvoiceProcessClose = () => {
    setOpenInvoiceProcess(false);
    setDialogData({});
  };

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
            {order.isPaidOff ? 'Paid Off' : 'Not Pay'}
          </Box>
          <Button
            sx={{
              width: '100px',
            }}
            size="small"
            onClick={heandleInvoiceDetailsOpen}
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
          <Stack direction={'row'} justifyContent="space-between">
            <Typography variant="caption" component={'p'}>
              Total :
            </Typography>
            <Typography variant="body" component={'p'}>
              {currencyFormatter.format(order.totalAmount, { code: 'IDR' })}
            </Typography>
          </Stack>
          <Stack direction={'row'} justifyContent="space-between">
            <Typography variant="caption" component={'p'}>
              Tax 11% :
            </Typography>
            <Typography variant="body" component={'p'}>
              {currencyFormatter.format(taxValue, { code: 'IDR' })}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" component={'p'}>
              Final Price :
            </Typography>
            <Typography align="right" variant="h6" component={'p'}>
              {currencyFormatter.format(finalPrice, { code: 'IDR' })}
            </Typography>
          </Stack>
        </Stack>
        <Button disabled={order.isPaidOff} onClick={heandleInvoiceProcessOpen} variant="contained" color="success">
          Proccess
        </Button>
      </Stack>
      <InvoiceDetailsDialog open={openInvoiceDetails} onClose={heandleInvoiceDetailsClose} data={order} />
      <InvoiceFormProcessDialog open={openInvoiceProcess} onClose={openInvoiceProcessClose} data={order} />
    </Stack>
  );
};

export default InvoiceCardList;

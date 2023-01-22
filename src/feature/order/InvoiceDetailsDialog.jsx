import React from 'react';
import { Dialog, DialogTitle, Stack, IconButton, Typography, Divider, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SummarizeIcon from '@mui/icons-material/Summarize';
import currencyFormatter from 'currency-formatter';
import { useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const InvoiceDetailsDialog = (props) => {
  //   const { data } = props;
  // console.log(props);
  const { open, onClose, data } = props;
  const [date, setDate] = useState(new Date(data.atCreate));
  console.log(date);

  return (
    <Dialog sx={{ minWidth: '300px' }} open={open}>
      {/* <DialogTitle>Dialog</DialogTitle> */}
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
      <Stack gap={1} sx={{ minWidth: '550px', padding: '1rem' }}>
        <Stack direction={'row'} justifyContent="space-between">
          <Typography variant="h4" component={'p'}>
            Total :
          </Typography>
          <Typography variant="h4" component={'p'}>
            {currencyFormatter.format(data.totalAmount, { code: 'IDR' })}
          </Typography>
        </Stack>
        <Divider />
        <Typography
          variant="h6"
          component={'p'}
          sx={{ color: `${data.isPaidOff ? 'green' : 'red'}`, textAlign: 'center', bgcolor: `${data.isPaidOff ? 'rgba(0,255,0,0.1)' : 'rgba(255,0,0,0.1)'}`, padding: '1rem 0' }}
        >
          {data.isPaidOff ? 'Paid Off' : 'Not Paid Yet'}
        </Typography>
        <Divider />
        <Typography variant="body" component={'p'}>
          Date : {date.toDateString()} | {date.toTimeString()}
        </Typography>
        <Divider />
        <Stack>
          <Typography variant="overline" component={'p'}>
            List Orders :
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.listOrder.map((order, index) => (
                  <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component={'th'} scope="row">
                      {order.item.title}
                    </TableCell>
                    <TableCell align="right">{currencyFormatter.format(order.item.price, { code: 'IDR' })}</TableCell>
                    <TableCell align="right">{order.quantity}</TableCell>
                    <TableCell align="right">{currencyFormatter.format(order.total, { code: 'IDR' })}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
        <Button variant="contained" color="success">
          Proccess
        </Button>
      </Stack>
    </Dialog>
  );
};

export default InvoiceDetailsDialog;

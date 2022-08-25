import React, { useState } from 'react';
import { Grid, Box, Typography, Stack, TextField, Table, Button, Divider } from '@mui/material';

import OrderMenuCard from './OrderMenuCard';

const Order = () => {
  const [listOrder, setListOrder] = useState([]);
  console.log(listOrder);

  // handle list menu card

  const addOrder = (index) => {
    setListOrder([...listOrder, index]);
  };

  return (
    <>
      <Grid container spacing={2}>
        {/* MENU SIDE  */}
        <Grid
          item
          sx={{
            height: '85vh',
            overflowY: 'scroll',
          }}
          xs={6}
        >
          <Stack spacing={1}>
            <Stack direction={'row'} spacing={1}>
              {category.map((category, index) => (
                <Stack
                  key={index}
                  spacing={1}
                  sx={{
                    bgcolor: 'whitesmoke',
                    borderRadius: '4px',
                    padding: '.8rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <Box
                    sx={{
                      width: '80px',
                      aspectRatio: '1/1',
                      bgcolor: '#ddd',
                      borderRadius: '100%',
                    }}
                  ></Box>
                  <Typography textAlign={'center'} variant="body2">
                    {category.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Divider />

            {/* MAP ITEM MENU */}
            <Stack
              sx={{
                // width: '100%',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
              direction={'row'}
            >
              {arr1.map((menu, index) => (
                <OrderMenuCard key={index} index={index} data={menu} addOrder={addOrder} />
              ))}
            </Stack>
            {/* MAP ITEM MENU END */}
          </Stack>
        </Grid>
        {/* MENU SIDE END   */}

        {/* ORDER LIST SIDE */}
        <Grid
          item
          sx={{
            height: '85vh',
            overflowY: 'scroll',
          }}
          xs={6}
        >
          <Box
            sx={{
              padding: '.5rem',
              backgroundColor: 'success.dark',
            }}
          >
            <Typography color={'white'} variant="body" component={'div'}>
              Order List
            </Typography>
          </Box>
          <Stack
            sx={{
              padding: '.8rem',
            }}
            spacing={1}
          >
            <TextField size="small" label="Order Ref" name="order-ref" id="order-ref" type={'text'} defaultValue={'2345-XDR-1208'} disabled />
            <TextField color="success" size="small" label="Customer" name="customer" id="customer" type={'text'} />
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'whitesmoke',
                minHeight: '100px',
                height: '330px',
                padding: '.8rem',
                overflowY: 'scroll',
              }}
            >
              {listOrder.map((list, index) => (
                <h1 key={index}>add list UI here</h1>
              ))}
            </Box>
            <Divider />
            <Stack direction={'row'} justifyContent="space-between">
              <Typography variant="h6" component={'div'}>
                Total Amount :
              </Typography>
              <Typography variant="h4" component={'div'}>
                Rp. 500.000,-
              </Typography>
            </Stack>
            <Divider />
            <Stack direction={'row'} justifyContent="space-between" spacing={1}>
              <Typography variant="caption">* Final Price Includes Tax</Typography>
              <Button color="success" variant="contained" size="large">
                PROCESS
              </Button>
            </Stack>
          </Stack>
        </Grid>
        {/* ORDER LIST SIDE END */}
      </Grid>
    </>
  );
};

const category = [{ label: 'all' }, { label: 'Food' }, { label: 'Drink' }, { label: 'Snack' }];
const arr1 = [
  { name: 'Ayam Goreng', price: 45000, category: 'food' },
  { name: 'Kopi Hitam', price: 45000, category: 'drink' },
  { name: 'Jus Mengkudu', price: 45000, category: 'drink' },
];

export default Order;

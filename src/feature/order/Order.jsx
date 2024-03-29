import React, { useState } from 'react';
import { Grid } from '@mui/material';

import Main from '../../components/layout/Main';
import OrderMenuList from './OrderMenuList';
import OrderForm from './OrderForm';

const Order = () => {
  const [listOrder, setListOrder] = useState([]);

  return (
    <Main title="Order">
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
          <OrderMenuList />
        </Grid>

        {/* ORDER LIST SIDE */}
        <Grid
          item
          sx={{
            height: '85vh',
            overflowY: 'scroll',
          }}
          xs={6}
        >
          <OrderForm />
        </Grid>
        {/* ORDER LIST SIDE END */}
      </Grid>
    </Main>
  );
};

export default Order;

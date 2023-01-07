import React, { useState } from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';
import OrderMenuCard from './OrderMenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMenu } from './sliceOrder';

const OrderMenuList = () => {
  const dispatch = useDispatch();
  const listMenu = useSelector((state) => state.order.menu);
  console.log(listMenu);

  const [listOrder, setListOrder] = useState([]);
  useEffect(() => {
    dispatch(fetchAllMenu('all'));
  }, []);

  return (
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
        {listMenu.data.map((menu, index) => (
          <OrderMenuCard key={index} index={index} data={menu} />
        ))}
      </Stack>
      {/* MAP ITEM MENU END */}
    </Stack>
  );
};

export default OrderMenuList;

const category = [{ label: 'all' }, { label: 'Food' }, { label: 'Drink' }, { label: 'Snack' }];

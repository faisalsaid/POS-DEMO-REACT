import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMenu, testingMenu } from './menuSlice';
import { useState, useEffect } from 'react';
import { Stack, Divider, Card, CardMedia, CardContent, Typography, Button, Box, Paper } from '@mui/material';

import MenuCard from './MenuCard';
import MenuCategoriesCard from './MenuCategoriesCard';

const category = [
  {
    name: 'all',
    icon: 'https://cdn-icons.flaticon.com/png/512/738/premium/738079.png?token=exp=1661163091~hmac=9f2cde47a9c2e6c083344818bb17f097',
  },
  {
    name: 'food',
    icon: 'https://cdn-icons-png.flaticon.com/512/857/857681.png',
  },
  {
    name: 'drink',
    icon: 'https://cdn-icons-png.flaticon.com/512/4329/4329538.png',
  },
];

const Menu = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.menu.menu);
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  // !important [DON'T DELETE] = this function to get uniq singgel array from array of object
  // const menuCategories = [...new Set(data.map((item) => item.category))];

  // !important [DON'T DELETE] this function to get unic object from array of object depends the key of object
  const newData = [...new Map(data.map((item) => [item['category'], item])).values()];

  useEffect(() => {
    dispatch(fetchAllMenu('all'));
  }, []);

  const trigerFilterCategory = (data) => {
    dispatch(fetchAllMenu(data));
  };

  const categoryCardAll = (
    <Paper
      sx={{
        padding: '.5rem',

        // bgcolor: 'success.light',
        '&:hover': {
          bgcolor: 'success.light',
        },
      }}
    >
      <Box
        component={'div'}
        sx={{
          backgroundImage: 'url(https://cdn-icons.flaticon.com/png/512/738/premium/738079.png?token=exp=1661163091~hmac=9f2cde47a9c2e6c083344818bb17f097)',
          height: '4rem',
          width: '4rem',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginBottom: '.5rem',
        }}
      ></Box>
      <Button size="small" onClick={() => trigerFilterCategory('all')}>
        All
      </Button>
    </Paper>
  );

  return (
    <>
      <Stack spacing={2}>
        {isLoading ? (
          <h1>...Loading</h1>
        ) : error !== '' ? (
          <p>No Data : {error}</p>
        ) : (
          <Stack direction={'row'} spacing={2}>
            {/* {categoryCardAll} */}
            {category.map((category) => (
              <MenuCategoriesCard key={category.name} data={category} click={trigerFilterCategory} />
            ))}
          </Stack>
        )}

        <Divider />
        <Stack direction={'row'} spacing={2}>
          {isLoading ? <h1>...Loading</h1> : error !== '' ? <p>No Data : {error}</p> : isLoading ? <h1>...Loading</h1> : data.map((menu) => <MenuCard key={menu.id} data={menu} />)}
        </Stack>
      </Stack>
    </>
  );
};

export default Menu;

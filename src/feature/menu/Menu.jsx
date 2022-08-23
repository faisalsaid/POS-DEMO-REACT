import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMenu, testingMenu } from './menuSlice';
import { useState, useEffect } from 'react';
import { Stack, Divider, Card, CardMedia, CardContent, Typography, Button, Box, Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import MenuCard from './MenuCard';
import MenuCategoriesCard from './MenuCategoriesCard';
import InputMenuDialog from './InputMenuDialog';

const Menu = () => {
  const [openAddMenuDialog, setOpenAddMenuDialog] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.menu.menu);
  const [dialogData, setDialogData] = useState({});

  useEffect(() => {
    dispatch(fetchAllMenu('all'));
  }, []);

  const trigerFilterCategory = (data) => {
    dispatch(fetchAllMenu(data));
  };

  const heandleAddMenuDialogOpen = () => {
    setOpenAddMenuDialog(true);
    setDialogData({
      title: 'Add New Menu',
      icon: <AddIcon />,
    });
  };
  const heandleAddMenuDialogClose = (fromDialog) => {
    setOpenAddMenuDialog(false);
    setDialogData({});
  };

  return (
    <>
      <Stack spacing={2}>
        {isLoading ? (
          <h1>...Loading</h1>
        ) : error !== '' ? (
          <p>No Data : {error}</p>
        ) : (
          <Stack direction={'row'} spacing={2}>
            {category.map((category) => (
              <MenuCategoriesCard key={category.name} data={category} click={trigerFilterCategory} />
            ))}
          </Stack>
        )}

        <Divider />
        <Stack direction={'row'} spacing={2}>
          <Button
            sx={{
              marginLeft: 'auto',
            }}
            variant="contained"
            startIcon={<AddIcon />}
            onClick={heandleAddMenuDialogOpen}
          >
            Add New Menu
          </Button>
          <InputMenuDialog open={openAddMenuDialog} onClose={heandleAddMenuDialogClose} data={dialogData} />
        </Stack>
        <Divider />
        <Stack direction={'row'} spacing={2}>
          {isLoading ? <h1>...Loading</h1> : error !== '' ? <p>No Data : {error}</p> : isLoading ? <h1>...Loading</h1> : data.map((menu) => <MenuCard key={menu.id} data={menu} />)}
        </Stack>
      </Stack>
    </>
  );
};

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

// !important [DON'T DELETE] = this function to get uniq singgel array from array of object
// const menuCategories = [...new Set(data.map((item) => item.category))];

// !important [DON'T DELETE] this function to get unic object from array of object depends the key of object
// const newData = [...new Map(data.map((item) => [item['category'], item])).values()];

export default Menu;

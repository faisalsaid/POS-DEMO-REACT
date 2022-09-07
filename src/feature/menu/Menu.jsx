import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMenu } from './menuSlice';
import { useState, useEffect } from 'react';
import { Stack, Divider, Button } from '@mui/material';

import Main from '../../components/layout/Main';
import MenuCard from './MenuCard';
import MenuCategoriesCard from './MenuCategoriesCard';
import InputMenuDialog from './InputMenuDialog';
import AddIcon from '@mui/icons-material/Add';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SkelCardMenuCategory from '../../components/skeleton/components/SkelCardMenuCategory';
import AddMenuFormDialog from './AddMenuFormDialog';

const Menu = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.menu.menu);
  const [openAddMenuDialog, setOpenAddMenuDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});
  const [activeCategory, setActiceCategory] = useState('all');

  useEffect(() => {
    dispatch(fetchAllMenu('all'));
  }, []);

  const trigerFilterCategory = (data) => {
    dispatch(fetchAllMenu(data));
    setActiceCategory(data);
  };

  const heandleAddMenuDialogOpen = () => {
    setOpenAddMenuDialog(true);
    setDialogData({
      title: 'Add New Menu',
      icon: <FastfoodIcon color="primary" />,
    });
  };
  const heandleAddMenuDialogClose = (fromDialog) => {
    setOpenAddMenuDialog(false);
    setDialogData({});
  };

  return (
    <Main>
      <Stack spacing={2}>
        {isLoading ? (
          <h1>...Loading</h1>
        ) : error !== '' ? (
          <p>No Data : {error}</p>
        ) : (
          <Stack direction={'row'} spacing={2}>
            {category.map((category) => (
              <MenuCategoriesCard key={category.name} data={category} activeCategory={activeCategory} click={trigerFilterCategory} />
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
          <AddMenuFormDialog open={openAddMenuDialog} onClose={heandleAddMenuDialogClose} data={dialogData} />
        </Stack>
        <Divider />

        <Stack flexWrap={'wrap'} direction="row" justifyContent="flex-start" alignItems="flex-start" sx={{ gap: '1rem' }}>
          {isLoading ? <h1>...Loading</h1> : error !== '' ? <p>No Data : {error}</p> : isLoading ? <h1>...Loading</h1> : data.map((menu) => <MenuCard key={menu.id} data={menu} />)}
        </Stack>
      </Stack>
    </Main>
  );
};

const category = [
  {
    name: 'all',
    icon: 'https://cdn-icons-png.flaticon.com/512/2776/2776827.png',
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

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMenu } from './menuSlice';
import { useState, useEffect } from 'react';
import { Stack, Divider, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MenuCard from './MenuCard';
// import { Card } from '@material-ui/core';

const Menu = () => {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => state.menu.menu);
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  // !important [DON'T DELETE] = this function to get uniq singgel array from arry of object
  // const menuCategories = [...new Set(data.map((item) => item.category))];

  // !important [DON'T DELETE] this function to get unic object from array of object depends the key of object
  const newData = [...new Map(data.map((item) => [item['category'], item])).values()];

  useEffect(() => {
    dispatch(fetchAllMenu());
  }, []);

  return (
    <>
      <Stack spacing={2}>
        {isLoading ? (
          <h1>...Loading</h1>
        ) : error !== '' ? (
          <p>No Data : {error}</p>
        ) : (
          <Stack direction={'row'} spacing={2}>
            {newData.map((menu) => (
              <Card key={menu.id}>
                <CardMedia component="img" image={menu.iconCategory} height="60" alt="vietnam drip" />
                <CardContent>
                  <Typography variant="body1" color="secondary">
                    {menu.category}
                  </Typography>
                </CardContent>
              </Card>
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

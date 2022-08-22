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
            <div>category 1</div>
            <div>category 3</div>
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

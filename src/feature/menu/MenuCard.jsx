import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllMenu } from './menuSlice';
import axios from 'axios';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import InputMenuDialog from './InputMenuDialog';

const MenuCard = (props) => {
  const dispatch = useDispatch();
  const { title, image, price, id } = props.data;

  const [openAddMenuDialog, setOpenAddMenuDialog] = useState(false);
  const [dialogData, setDialogData] = useState({});
  console.log(dialogData);

  const deleteMenu = (id) => {
    return axios
      .delete(`${process.env.REACT_APP_API_SOURCE}menu/${id}`)
      .then((resp) => dispatch(fetchAllMenu('all')))
      .catch((err) => console.log(err.message));
  };

  const heandleAddMenuDialogOpen = () => {
    setOpenAddMenuDialog(true);
    setDialogData({
      isEdit: true,
      title: 'Edit Menu',
      icon: <FastfoodIcon color="primary" />,
      menuInfo: props.data,
    });
  };
  const heandleAddMenuDialogClose = (fromDialog) => {
    setOpenAddMenuDialog(false);
    setDialogData({});
  };

  const handleEditButton = () => {
    console.log('data');
    heandleAddMenuDialogOpen();
  };

  return (
    <Card sx={{ width: 200 }}>
      <CardMedia component="img" height="140" image={image} alt="vietnam drip" />
      <CardContent>
        <Typography color="secondary" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rp. {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Button onClick={() => deleteMenu(id)} fullWidth endIcon={<DeleteIcon />} variant="contained" color="error" size="small">
              delete
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleEditButton} fullWidth endIcon={<EditIcon />} variant="contained" color="success" size="small">
              edit
            </Button>
            <InputMenuDialog open={openAddMenuDialog} onClose={heandleAddMenuDialogClose} data={dialogData} />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default MenuCard;

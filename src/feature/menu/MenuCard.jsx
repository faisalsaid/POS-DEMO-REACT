import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const MenuCard = (props) => {
  const { title, image, price, id } = props.data;

  const deleteMenu = (id) => {
    return axios
      .delete(`${process.env.REACT_APP_API_SOURCE}menu/${id}`)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err.message));
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
            <Button fullWidth endIcon={<EditIcon />} variant="contained" color="success" size="small">
              edit
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default MenuCard;

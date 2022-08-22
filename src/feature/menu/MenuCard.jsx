import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const MenuCard = (props) => {
  const { title, image, price } = props.data;
  return (
    <Card sx={{ maxWidth: 250 }}>
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
        <Button endIcon={<DeleteIcon />} variant="contained" color="error" size="small">
          delete
        </Button>
        <Button endIcon={<EditIcon />} variant="contained" color="success" size="small">
          edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default MenuCard;

import React from 'react';
import { Paper, Box, Typography, Button } from '@mui/material';

const MenuCategoriesCard = (props) => {
  const { name, icon } = props.data;

  //   const handleClick = (data) => {
  //     props.click(data);
  //   };
  return (
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
          backgroundImage: `url(${icon})`,
          height: '4rem',
          width: '4rem',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          marginBottom: '.5rem',
        }}
      ></Box>
      <Button size="small" onClick={() => props.click(name)}>
        {name}
      </Button>
    </Paper>
  );
};

export default MenuCategoriesCard;

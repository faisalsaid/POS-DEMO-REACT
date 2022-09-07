import React, { useEffect, useState } from 'react';
import { Paper, Box, Typography, Button } from '@mui/material';

const MenuCategoriesCard = ({ data, activeCategory, click }) => {
  const [isActive, setIsActive] = useState(false);
  const { name, icon } = data;

  useEffect(() => {
    name === activeCategory ? setIsActive(true) : setIsActive(false);
  }, [activeCategory]);

  return (
    <Paper
      sx={{
        padding: '.5rem',
        // bgcolor: isActive && 'success.light',
        border: isActive && '2px solid green',

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
      <Button variant={isActive && 'contained'} color="success" size="small" onClick={() => !isActive && click(name)}>
        {name}
      </Button>
    </Paper>
  );
};

export default MenuCategoriesCard;

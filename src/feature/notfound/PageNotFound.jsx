import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          height: '100vh',
        }}
      >
        <Typography variant="h1" component={'div'}>
          !Ops - 404
        </Typography>
        <Typography variant="h5" component={'div'}>
          Page Not Found
        </Typography>
        <Stack justifyContent="center" alignItems="center" spacing={4} direction={'row'}>
          <Button onClick={() => navigate(-1)}>Bring Me Back</Button>
          <Typography variant="h6" component={'p'}>
            Or
          </Typography>
          <Button onClick={() => navigate('/')}>Take Me Home</Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PageNotFound;

import { Grid, Stack, Box, TextField, Typography, Divider, Button } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import React from 'react';

const Login = () => {
  return (
    <>
      <Box sx={{ height: '84vh', display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
        <Stack
          spacing={2}
          sx={{ padding: '1rem', border: '.1px solid rgba(0,0,0,0.1)', bgcolor: 'whitesmoke', borderRadius: '1rem', width: '400px', boxShadow: '1px 3px 12px rgba(0,0,0,0.1)' }}
        >
          <Typography color={'success'} variant="h3" component={'h1'}>
            Login
          </Typography>

          <TextField color={'success'} fullWidth type={'text'} label={'User Name'} bot />
          <TextField color={'success'} fullWidth type={'email'} label={'Email'} />
          <TextField color={'success'} fullWidth type={'password'} label={'Password'} />
          <Button startIcon={<LoginIcon />} variant={'contained'} type={'submit'} color="success">
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;

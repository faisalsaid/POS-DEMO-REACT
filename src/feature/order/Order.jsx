import React from 'react';
import { Grid, Box, Typography, Stack, TextField, Table, Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Order = () => {
  return (
    <>
      <Grid container spacing={2}>
        {/* MENU SIDE  */}
        <Grid
          item
          sx={{
            height: '85vh',
            overflowY: 'scroll',
          }}
          xs={6}
        >
          <Stack spacing={1}>
            <Stack direction={'row'} spacing={1}>
              {category.map((category) => (
                <Stack
                  spacing={1}
                  sx={{
                    bgcolor: 'whitesmoke',
                    borderRadius: '4px',
                    padding: '.8rem',
                  }}
                >
                  <Box
                    sx={{
                      width: '80px',
                      aspectRatio: '1/1',
                      bgcolor: '#ddd',
                      borderRadius: '100%',
                    }}
                  ></Box>
                  <Typography textAlign={'center'} variant="body2">
                    {category.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
            <Divider />
            <Stack
              sx={{
                width: 'auto',
              }}
              direction={'row'}
              spacing={1}
            >
              {arr1.map((menu) => (
                <Stack
                  spacing={1}
                  sx={{
                    bgcolor: 'whitesmoke',
                    borderRadius: '4px',
                    width: '180px',
                  }}
                >
                  <Box sx={{ width: '100%', aspectRatio: '10/6', bgcolor: '#ddd' }}></Box>
                  <Stack
                    spacing={1}
                    sx={{
                      padding: '1rem',
                    }}
                  >
                    <Typography variant="h6" component={'p'}>
                      {'Menu Title'}
                    </Typography>
                    <Typography variant="body" component={'p'}>
                      Rp.25.000,-
                    </Typography>

                    <Button startIcon={<AddIcon />} size="large" color="secondary" variant="contained" fullWidth>
                      Order
                    </Button>
                  </Stack>
                </Stack>
              ))}
              <Stack
                spacing={1}
                sx={{
                  bgcolor: 'whitesmoke',
                  borderRadius: '4px',
                  width: '180px',
                }}
              >
                <Box sx={{ width: '100%', aspectRatio: '10/6', bgcolor: '#ddd' }}></Box>
                <Stack
                  spacing={1}
                  sx={{
                    padding: '1rem',
                  }}
                >
                  <Typography variant="h6" component={'p'}>
                    {'Menu Title'}
                  </Typography>
                  <Typography variant="body" component={'p'}>
                    Rp.25.000,-
                  </Typography>

                  <Button startIcon={<AddIcon />} size="large" color="secondary" variant="contained" fullWidth>
                    Order
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        {/* MENU SIDE END   */}

        {/* ORDER LIST SIDE */}
        <Grid
          item
          sx={{
            height: '85vh',
            overflowY: 'scroll',
          }}
          xs={6}
        >
          <Box
            sx={{
              padding: '.5rem',
              backgroundColor: 'secondary.dark',
            }}
          >
            <Typography color={'white'} variant="body" component={'div'}>
              Order List
            </Typography>
          </Box>
          <Stack
            sx={{
              padding: '.8rem',
            }}
            spacing={1}
          >
            <TextField size="small" label="Order Ref" name="order-ref" id="order-ref" type={'text'} defaultValue={'2345-XDR-1208'} disabled />
            <TextField color="secondary" size="small" label="Customer" name="customer" id="customer" type={'text'} />
            <Box
              sx={{
                width: '100%',
                backgroundColor: 'whitesmoke',
                minHeight: '100px',
                height: '330px',
                padding: '.8rem',
                overflowY: 'scroll',
              }}
            >
              list
            </Box>
            <Divider />
            <Stack direction={'row'} justifyContent="space-between">
              <Typography variant="h6" component={'div'}>
                Total Amount :
              </Typography>
              <Typography variant="h4" component={'div'}>
                Rp. 500.000,-
              </Typography>
            </Stack>
            <Divider />
            <Stack direction={'row'} justifyContent="space-between" spacing={1}>
              <Typography variant="caption">* Final Price Includes Tax</Typography>
              <Button color="secondary" variant="contained" size="large">
                PROCESS
              </Button>
            </Stack>
          </Stack>
        </Grid>
        {/* ORDER LIST SIDE END */}
      </Grid>
    </>
  );
};

const category = [{ label: 'all' }, { label: 'Food' }, { label: 'Drink' }, { label: 'Snack' }];
const arr1 = ['satu', 'satu', 'satu', 'satu', 'satu', 'satu', 'satu', 'satu'];

export default Order;

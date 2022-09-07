import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addListOrder } from './sliceOrder';
import { useDispatch, useSelector } from 'react-redux';

const OrderMenuCard = (props) => {
  const {
    data,
    data: { title, price, image, isAvalible },
  } = props;

  const dispatch = useDispatch();
  const listOrderId = useSelector((state) => state.order.listOrder.map((data) => data.item.id));

  const handleAddListOrder = (data) => {
    !listOrderId.includes(data.id) ? dispatch(addListOrder(data)) : alert(`${data.title} ready add on list order`);
  };

  return (
    <>
      <Stack
        spacing={1}
        sx={{
          bgcolor: 'whitesmoke',
          borderRadius: '4px',
          width: '160px',
          maxWidth: '160px',
        }}
      >
        <Box sx={{ width: '100%', aspectRatio: '10/6', bgcolor: '#ddd' }}>
          <img
            src={image}
            alt=""
            style={{
              width: '100%',
            }}
          />
        </Box>
        <Stack
          spacing={1}
          sx={{
            padding: '1rem',
          }}
        >
          <Typography variant="body" component={'p'}>
            {title}
          </Typography>
          <Typography variant="body2" component={'p'}>
            Rp.{price},-
          </Typography>

          <Button onClick={() => handleAddListOrder(data)} startIcon={<AddIcon />} color="success" variant="contained" fullWidth>
            Order
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default OrderMenuCard;

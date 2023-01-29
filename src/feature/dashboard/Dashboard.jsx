import { useEffect, useState } from 'react';
import Main from '../../components/layout/Main';
import { Typography, Stack, Divider } from '@mui/material';
import DashboardCard from '../../components/utility/DashboardCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllOmset } from './sliceDashboard';

// ICONS
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RedeemIcon from '@mui/icons-material/Redeem';

const Dashboard = () => {
  const { isLoading, data: allOrders, error } = useSelector((state) => state.order.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOmset());
  }, []);

  const card1 = {
    background: 'linear-gradient(-90deg,rgba(205,233,144,1) 0%, rgba(170,203,115,1) 100%)',
    title: 'Today',
    value: {
      isCurency: true,
      value: 40000,
    },
    description: 'Halo Stangger is New Era',
    icon: <AttachMoneyIcon sx={{ fontSize: '3rem' }} />,
  };

  const card2 = {
    background: 'linear-gradient(-90deg, rgba(250,211,231,1) 0%, rgba(233,142,173,1) 100%)',
    title: 'Sale Items',
    value: {
      isCurency: false,
      value: 80,
    },
    description: 'Halo Stangger is New Era',
    icon: <RedeemIcon sx={{ fontSize: '3rem' }} />,
  };

  const card3 = {
    background: 'linear-gradient(-90deg, rgba(251,194,82,1) 0%, rgba(255,177,0,1) 100%)',
    title: 'Total Earnings',
    value: {
      isCurency: true,
      value: 8000,
    },
    description: 'Halo Stangger is New Era',
    icon: <AttachMoneyIcon sx={{ fontSize: '3rem' }} />,
  };

  return (
    <Main title="Dashboard">
      <Stack>
        <Typography variant="h5" component={'h5'}>
          Dashboard
        </Typography>
      </Stack>
      <Divider />
      <Stack direction={'row'} gap={1} sx={{ padding: '1rem' }}>
        <DashboardCard data={card1} />
        <DashboardCard data={card2} />
        <DashboardCard data={card3} />
      </Stack>
    </Main>
  );
};

export default Dashboard;

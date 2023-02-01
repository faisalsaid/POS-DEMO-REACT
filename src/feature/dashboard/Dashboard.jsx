import { useEffect, useState } from 'react';
import Main from '../../components/layout/Main';
import { Typography, Stack, Divider } from '@mui/material';
import DashboardCard from '../../components/utility/DashboardCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllOmset } from './sliceDashboard';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// ICONS
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RedeemIcon from '@mui/icons-material/Redeem';
import { Box } from '@mui/system';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const dispatch = useDispatch();

  const { data: dashboardData, isLoading, error } = useSelector((state) => state.dashboard.dashboard);
  const [dataToFace, setDatatoFace] = useState([]);
  const [barData, setBarData] = useState({
    labels: [],
    datasets: [],
  });

  const options = {};
  // console.log(dashboardData);

  useEffect(() => {
    dispatch(fetchAllOmset());
    // console.log(dataToFace);
  }, []);

  useEffect(() => {
    setDatatoFace(dashboardData);
  }, [dashboardData]);

  useEffect(() => {
    const { barData } = dataToFace;
    if (barData && barData.length > 0) {
      console.log(barData);
      setBarData({
        labels: barData.map((data) => data.customer),
        datasets: [
          {
            label: 'Nilai',
            data: barData.map((data) => data.finalPrice),
            backgroundColor: ['green'],
          },
        ],
      });
    }
  }, [dataToFace]);

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
      value: dashboardData.saleItems,
    },
    description: 'Halo Stangger is New Era',
    icon: <RedeemIcon sx={{ fontSize: '3rem' }} />,
  };

  const card3 = {
    background: 'linear-gradient(-90deg, rgba(251,194,82,1) 0%, rgba(255,177,0,1) 100%)',
    title: 'Total Earnings',
    value: {
      isCurency: true,
      value: dashboardData.totalEarnings,
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
      <Stack>
        <Box width={700}>
          <Bar data={barData} options={options}></Bar>
        </Box>
      </Stack>
    </Main>
  );
};

export default Dashboard;

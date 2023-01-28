import Main from '../../components/layout/Main';
import { Typography, Stack, Divider } from '@mui/material';

const Dashboard = () => {
  return (
    <Main title="Dashboard">
      <Stack>
        <Typography variant="h5" component={'h5'}>
          Dashboard
        </Typography>
      </Stack>
      <Divider />
      <Stack direction={'row'} gap={1}></Stack>
    </Main>
  );
};

export default Dashboard;

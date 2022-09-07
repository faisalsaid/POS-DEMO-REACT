import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StoreIcon from '@mui/icons-material/Store';

const color = 'success';

export const listSideMenu = [
  {
    name: 'Dashboard',
    icon: <DashboardIcon color={color} />,
    path: '/',
  },
  {
    name: 'Menu',
    icon: <RestaurantMenuIcon color={color} />,
    path: '/menu',
  },
  {
    name: 'Order',
    icon: <StoreIcon color={color} />,
    path: '/order',
  },
];

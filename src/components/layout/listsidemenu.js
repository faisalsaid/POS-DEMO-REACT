import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StoreIcon from '@mui/icons-material/Store';
import ReceiptIcon from '@mui/icons-material/Receipt';

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
    subMenu: [
      {
        name: 'Invoice',
        icon: <ReceiptIcon color={color} />,
        path: '/order/invoice',
      },
    ],
  },
];

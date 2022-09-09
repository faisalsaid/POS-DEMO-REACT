import React, { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ListItemComp = ({ list, open, navigate }) => {
  const location = useLocation();
  const [openSub, setOpenSub] = useState(false);

  useEffect(() => {
    const arr = location.pathname.split('/');
    location.pathname === list.path || arr.includes(list.path.substring(1)) ? setOpenSub(true) : setOpenSub(false);
  }, [location]);
  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
        onClick={() => navigate(list.path)}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {list.icon}
        </ListItemIcon>
        <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
      {/* sub menu */}
      {list?.subMenu?.map((subMenu, index) => (
        <Collapse key={index} in={openSub} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate(subMenu.path)}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      ))}
      {/* sub menu end*/}
    </ListItem>
  );
};

export default ListItemComp;

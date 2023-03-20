import React, { useMemo } from 'react';
import "./SidBar.css"
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
const SidBar = ({ drawerWidth, container, mobileOpen, handleDrawerToggle, i18n }) => {
  let navigate = useNavigate()
  let drawer = useMemo(() => {
    return (
      <>
        <Toolbar />
        <Divider />
        <List>

          <ListItem disablePadding   >
            <ListItemButton sx={{ color: '#fff' }} onClick={() => {
              navigate('/admin')
            }} >
              <ListItemIcon >
                <InboxIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={'Dash'} />
            </ListItemButton>
            {/* ================================================= */}
          </ListItem>
          <ListItem disablePadding   >
            <ListItemButton sx={{ color: '#fff' }} onClick={() => {
              navigate('/admin/shop')
            }}>
              <ListItemIcon>
                <InboxIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={'shop'} />
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding   >
            <ListItemButton sx={{ color: '#fff' }} onClick={() => {
              navigate('/admin/services')
            }} >
              <ListItemIcon >
                <InboxIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={'Services'} />
            </ListItemButton>
            {/* ================================================= */}
          </ListItem>
          
          <ListItem disablePadding   >
            <ListItemButton sx={{ color: '#fff' }} onClick={() => {
              navigate('/admin/products')
            }} >
              <ListItemIcon >
                <InboxIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={'Products'} />
            </ListItemButton>
            {/* ================================================= */}
          </ListItem>
          <ListItem disablePadding   >
            <ListItemButton sx={{ color: '#fff' }} onClick={() => {
              navigate('/categories')
            }} >
              <ListItemIcon >
                <InboxIcon sx={{ color: '#fff' }} />
              </ListItemIcon>
              <ListItemText primary={'Categories'} />
            </ListItemButton>
            {/* ================================================= */}
          </ListItem>
          
        </List>
        {/* <Divider /> */}

      </>
    );

  }, []);

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className='sidbar'
      >
        {/*  drawer in responsive */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#011a4d', left: i18n.language === 'ar' ? 'auto' : '0' },
          }}
        >
          {drawer}
        </Drawer>
        {/*  drawer in dk */}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#011a4d', left: i18n.language === 'ar' ? 'auto' : '0'
            },
          }}
          open

        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default SidBar;

'use client';

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function MUIDrawerPage() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => () => setOpen(state);

  return (
    <div>
      <h1>/mui/drawer</h1>
      <Button onClick={toggleDrawer(true)} variant="contained">
        Open Drawer
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Item 3" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
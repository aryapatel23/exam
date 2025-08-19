'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MUITabsPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>/mui/navigation/tabs</h1>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: 2 }}>
        <Tabs value={value} onChange={handleChange} aria-label="mui tabs example">
          <Tab label="Tab One" />
          <Tab label="Tab Two" />
          <Tab label="Tab Three" />
        </Tabs>
        <Box sx={{ p: 2 }}>
          <Typography>
            {`You selected Tab ${value + 1}`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}
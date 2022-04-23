import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
      primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
    },
});

const TabsComponents = ({sendTabValue}) => {
  const [value, setValue] = useState("all");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
      sendTabValue(value)
  }, [value])

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ThemeProvider theme={theme}>
        <Tabs 
        indicatorColor="primary"
        value={value} 
        onChange={handleChange} 
        centered>
          <Tab label="all" value="all" />
          <Tab label="web design" value="Web Design" />
          <Tab label="front-end" value="Front-End" />
          <Tab label="back-end" value="Back-End" />
        </Tabs>
      </ThemeProvider>
    </Box>
  );
}

export default TabsComponents;
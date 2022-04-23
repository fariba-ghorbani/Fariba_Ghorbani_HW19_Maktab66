import { Grid, Box, Paper, Typography } from '@mui/material';
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Dashboard = () => {
  return (
    <Paper elevation={6} sx={{mt:10 ,mx: 'auto',minHeight: 300}} >
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        // style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Typography variant="h2" component="h2" align='center'>
              My Dashboard!
          </Typography>
        </Grid>
        <Grid item>
          <DashboardIcon sx={{fontSize: 150}}/>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Dashboard;

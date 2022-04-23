import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import { yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ModalForm from '../Components/ModalForm';
import { Outlet, useNavigate } from 'react-router-dom';



const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
          },
        warning: {
            main: yellow[700],
        },
    },
});


export default function ButtonAppBar() {
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate()

    const handleClickOpen = () => {
      setOpenModal(true);
    };
  
    const handleClose = () => {
      setOpenModal(false);
    };


    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>

                <AppBar position="static" sx={{bgColor: "success"}}>
                  <Toolbar >
                    <Grid container alignItems="center">
                      
                      <Grid item md={4} xs={12}>
                        <Box sx={{display: 'flex', justifyContent:'space-between'}}>
                          <IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mx: 1 }}
                          >
                              <MenuIcon />
                          </IconButton>
                          <Box>

                              <Fab onClick={() => navigate('/login')} sx={{m: 1}} variant="extended" color="warning" aria-label="add">
                                  <LoginIcon sx={{ mr: 1 }} />
                                  Login
                              </Fab>
                              <Fab onClick={() => navigate('/dashboard')} sx={{m: 1}} variant="extended" color="warning" aria-label="add">
                                  <DashboardIcon sx={{ mr: 1 }} />
                                  Dashboard
                              </Fab>
                          </Box>
                        </Box>
                      </Grid>

                      <Grid item md={4} xs={12}>
                        <Box sx={{mx: 'auto', display: "flex", flexDirection: "column", alignItems:"center"}}>
                            <Typography variant="h6" component="h2">
                                my skills whithin
                            </Typography>
                            <Typography variant="h2" component="h1">
                                Material UI
                            </Typography>
                        </Box>
                      </Grid>

                      <Grid item md={4} xs={12} sx={{mb:2, display: 'flex', alignItems:'center', justifyContent: 'flex-end', gap:2}}>
                        <Fab color="warning" aria-label="add" onClick={() => navigate('/')}>
                            <HomeIcon />
                        </Fab>
                        <Fab color="warning" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                      </Grid>

                    </Grid>
                  </Toolbar>
                </AppBar>

                <ModalForm openModal={openModal} handleClose={handleClose} />

            </ThemeProvider>
        </Box>
        <Outlet />
        </>
    );
}
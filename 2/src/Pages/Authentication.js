import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Login from '../Components/Login'
import { UserLogin } from '../Context/userLogin'
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';

const Authentication = () => {
    const { token, setToken } = useContext(UserLogin)

    const logOut = () => {
        setToken("")
        localStorage.removeItem("token")
    }

    return (
        <>
            {token?
            <Box sx={{mt: 5, display: 'flex', flexDirection: 'column', 
            alignItems: 'center', gap: 3}}>
                <Typography variant="h3" component="h2" align='center'>
                    You are logged in
                </Typography>
                <Button onClick={logOut} variant="outlined">Logout</Button>
            </Box>
            :
            <Login />
            }
        </>
    )
}

export default Authentication

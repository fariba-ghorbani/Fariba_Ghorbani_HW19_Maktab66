import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import {userFormValidation as validation } from '../Functions/validation';
import { UserLogin } from '../Context/userLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
	const { setToken } = useContext(UserLogin)
	const [loginForm, setLoginForm] = useState({email: "", password: ""})
	const [errors, setErrors] = useState({email: true, password: true})
	const [logError, setLogError] = useState("")
	const [loading, setLoading] = useState(false)
	const location = useLocation()
	const navigate = useNavigate()

	let from = location.state?.from?.pathname || "/";

	const submitForm = () => {
		const raisedErrors = validation(loginForm)

		if (Object.values(raisedErrors).some(item => item == false)) {
			setErrors(raisedErrors)
		} else {
			setErrors(raisedErrors)
			console.log(loginForm)
			setLoading(true)
			axios.post('https://reqres.in/api/login', loginForm)
				.then(res => res.data)
				.then(data =>{
					localStorage.setItem('token', data.token)
					setToken(data.token)
				})
				.then(() => {
					setLogError("")
					navigate(from, { replace: true });
				})
				.catch((cth) => setLogError("wrong email or password!"))
				.finally(() => setLoading(false))
		}
	}

	return (
		<Box
		component="form"
		sx={{mt: 5, display:'flex', flexDirection:'column', alignItems: 'center',
			'& .MuiTextField-root': { p: 1, width: 0.5},
		}}
		noValidate
		autoComplete="off"
		>
			<TextField
				fullWidth
				required
				id="outlined-required-1"
				label="email"
				value={loginForm.email}
				error={!errors.email}
				helperText={!errors.email? "this field is required!": null}
				onChange={(e) => setLoginForm(prevState => ({...prevState, email: e.target.value}))}
			/>
			<TextField
				required
				id="outlined-required-2"
				label="password"
				type="password"
				value={loginForm.password}
				error={!errors.password}
				helperText={!errors.password? "this field is required!": null}
				onChange={(e) => setLoginForm(prevState => ({...prevState, password: e.target.value}))}
			/>

			<Typography sx={{color: "red"}}  variant="h6" component="h2" align='center'>
				{logError}
			</Typography>

			<Button sx={{my: 3}} onClick={submitForm} variant="text">Login</Button>


			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Box>
	)
}

export default Login;

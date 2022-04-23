import React, {useEffect, useState, useContext} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DataManipulation } from '../Context/dataManiupulation';
import {itemFormValidation as validation }  from '../Functions/validation';

const menu = ['Web Design', 'Front-End', 'Back-End']

const AddItemForm = ({handleClose}) => {
	const {addItemInDatabase} = useContext(DataManipulation)
    const [newForm, setNewForm] = useState({title: "", category: "", description: ""})
	const [errors, setErrors] = useState({title: true, category: true, description: true})

	const submitForm = () => {
		const raisedErrors = validation(newForm)

		if (Object.values(raisedErrors).some(item => item == false)) {
			setErrors(raisedErrors)
		} else {
			setErrors(raisedErrors)
			addItemInDatabase(newForm, true)
			handleClose()
		}
	}

    return (
		<div>
			<Box
			component="form"
			sx={{ display:'flex', flexDirection:'column',
				'& .MuiTextField-root': { m: 0, width: 1 },
			}}
			noValidate
			autoComplete="off"
			>
				<TextField sx={{my:2}}
				margin='normal'
					id="standard-basic" 
					label="title" 
					variant="standard"
					error={!errors.title}
					helperText={!errors.title? "this field is required!": null}
					onChange={(e) => setNewForm(prevState => ({...prevState, title: e.target.value}))}
					value={newForm.title}
				/>

				<TextField sx={{my:2}}
					id="standard-select-currency"
					select
					label="Skills"
					value={newForm.category}
					error={!errors.category}
					helperText={!errors.category? "this field is required!": null}
					onChange={(e) => setNewForm(prevState => ({...prevState, category: e.target.value }))}
					variant="standard"
				>
				{menu.map((option) => (
					<MenuItem key={option} value={option}>
					{option}
					</MenuItem>
				))}
				</TextField>

				<TextField
					id="standard-multiline-static"
					label="Description"
					multiline
					rows={4}
					variant="standard"
					error={!errors.description}
					helperText={!errors.description? "this field is required!": null}
					onChange={(e) => setNewForm(prevState => ({...prevState, description: e.target.value}))}
					value={newForm.description}
				/>
				
			</Box>

			<Button onClick={submitForm} variant="text">CREATE</Button>
		</div>
  	)
}

export default AddItemForm;

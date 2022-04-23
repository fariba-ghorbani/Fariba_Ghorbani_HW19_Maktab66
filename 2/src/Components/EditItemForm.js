import React, {useEffect, useState, useContext} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DataManipulation } from '../Context/dataManiupulation';
import {itemFormValidation as validation } from '../Functions/validation'

const menu = ['Web Design', 'Front-End', 'Back-End']

const EditItemForm = () => {
	const {targetData, editItemInDatabase} = useContext(DataManipulation)
    const [edittingForm, setEdittingForm] = useState({title: targetData.title, category: targetData.category, description: targetData.description})
	const [errors, setErrors] = useState({title: true, category: true, description: true})

    useEffect(() => {
		setEdittingForm({title: targetData.title, category: targetData.category, description: targetData.description})
    }, [targetData])


	const submitForm = () => {
		const raisedErrors = validation(edittingForm)

		if (Object.values(raisedErrors).some(item => item == false)) {
			setErrors(raisedErrors)
		} else {
			setErrors(raisedErrors)
			console.log(targetData, {...edittingForm, id: targetData.id})
			editItemInDatabase(targetData, {...edittingForm, id: targetData.id})
		}
	}

    return (
		<Box sx={{ width: 0.5, m: 'auto'}}>
			<Box
				component="form"
				sx={{ display:'flex', flexDirection:'column', gap: 2,
					'& .MuiTextField-root': { m: 0 },
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
					onChange={(e) => setEdittingForm(prevState => ({...prevState, title: e.target.value}))}
					value={edittingForm.title}
				/>

				<TextField sx={{my:2}}
					select
					id="standard-select-currency"
					variant="standard"
					label="Skills"
					error={!errors.category}
					helperText={!errors.category? "this field is required!": null}
					onChange={(e) => setEdittingForm(prevState => ({...prevState, category: e.target.value }))}
					value={edittingForm.category}
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
					onChange={(e) => setEdittingForm(prevState => ({...prevState, description: e.target.value}))}
					value={edittingForm.description}
				/>
			</Box>

			<Button onClick={submitForm} variant="text">EDIT</Button>
		</Box>
  	)
}

export default EditItemForm;

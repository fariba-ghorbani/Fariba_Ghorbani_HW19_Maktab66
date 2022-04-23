import React, { useContext } from 'react'
import { DataManipulation } from '../Context/dataManiupulation';
import EditItemForm from './EditItemForm';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const DataScreen = () => {
    const {showMode, editMode, targetData} = useContext(DataManipulation)
    
    if (showMode) return (
        <Box sx={{p:3, overflowX: 'auto'}}>
            <Typography variant="h4" component="h2" align='center' sx={{mb:3}}>
                {targetData.title}
            </Typography>
            <Typography  variant="body1" component="h2" align='center'>
                {targetData.description}
            </Typography>
        </Box>
    )
    if (editMode) return (
        <Box sx={{p:3}}>
            <EditItemForm />
        </Box>
    )
    return (
        <Box sx={{p:3}}>
            <Typography variant="h4" component="h2" align='center' sx={{mb:3}}>
                Welcome!
            </Typography>
            <Typography variant="body1" component="h2" align='center'>
                Please select an exercise from the list on the left side.
            </Typography>
        </Box>
    )
}

export default DataScreen;

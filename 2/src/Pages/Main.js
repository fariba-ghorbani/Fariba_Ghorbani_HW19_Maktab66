import React, { useContext, useState } from 'react'
import { Container, Grid } from '@mui/material';
import CategoryList from '../Components/CategoryList'
import TabsComponents from '../Components/Tabs';
import { DataManipulation } from '../Context/dataManiupulation';
import AddItemForm from '../Components/AddItemForm';
import DataScreen from '../Components/DataScreen';
import Login from '../Components/Login';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';


const Main = () => {
    const [value, setValue] = useState("all")

    const getTabValue = (val) => {
        setValue(val)
    }

    return (
        <Box  sx={{width: 1, p:0 }}>
            <Grid container alignItems="stretch" rowSpacing={1} sx={{minHeight: 550}}>
                <Grid item md={6} xs={12} >
                    <Paper elevation={2} sx={{height: 1}} >
                        <CategoryList value={value}  />
                    </Paper>
                </Grid>
                <Grid item md={6} xs={12} >
                    <Paper elevation={2} sx={{height: 1}} >
                        <DataScreen />
                    </Paper>
                </Grid>
            </Grid>
            <Paper sx={{mt: 2}}>
                <TabsComponents sendTabValue={getTabValue} />
            </Paper>
        </Box>
    )
}

export default Main

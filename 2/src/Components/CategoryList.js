import { Box } from '@mui/system'
import { Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import database from '../data'
import ListItems from './ListItems';
import AddItemForm from './AddItemForm';
import { DataManipulation } from '../Context/dataManiupulation';
import Paper from '@mui/material/Paper';


const CategoryList = ({value}) => {
    const {list} = useContext(DataManipulation)

    return (
        <Box  sx={{width: 1, p:3}}>
            {value === "all"?
            ['Web Design', 'Front-End', 'Back-End'].map(title => {
                return (
                    <Box>
                        <Typography align='center' variant="h5" component="h2">
                            {title}
                        </Typography>
                        <ListItems list={list[title]} />
                    </Box>
                )
            })
            :
            <Box>
                <Typography align='center' variant="h5" component="h2">
                    {value}
                </Typography>
                <ListItems list={list[value]} />
            </Box>
            }

        </Box>
    )
}

export default CategoryList;

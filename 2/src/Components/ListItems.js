import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemSecondaryAction } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataManipulation } from '../Context/dataManiupulation';

const ListItems = ({list}) => {
    const { deleteItemInDatabase,
            setEditMode,
            setShowMode,
            setTargetData,
        } = useContext(DataManipulation)

    const handleClickOnItem = (item) => {
        setShowMode(true)
        setEditMode(false)
        setTargetData(item)
    }

    const handleEditItem = (item) => {
        setShowMode(false)
        setEditMode(true)
        setTargetData(item)
    }

    return (
        <Box>
            <List component="div" aria-label="category list">
                {list?.map(item => {
                    return (
                    <ListItem onClick={() => handleClickOnItem(item)}
                    button key={item.id}>
                    
                        <ListItemText primary={item.title}  />

                        <ListItemSecondaryAction>
                            <IconButton onClick={() => handleEditItem(item)} aria-label="edit">
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => deleteItemInDatabase(item, true)} edge="end" aria-label="delete">
                                <DeleteIcon  />
                            </IconButton>
                        </ListItemSecondaryAction>
    
                    </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default ListItems;

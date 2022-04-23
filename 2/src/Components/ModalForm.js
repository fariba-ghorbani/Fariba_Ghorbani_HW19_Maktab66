import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddItemForm from './AddItemForm';

export default function ModalForm({openModal, handleClose}) {


  return (
    <div>
		<Dialog open={openModal} onClose={handleClose} fullWidth={true} maxWidth='xs'>
			<DialogTitle>Create a New Skill</DialogTitle>
			<DialogContent>
			<DialogContentText>
				Please fill out the form below
			</DialogContentText>
				<AddItemForm handleClose={handleClose}/>
			</DialogContent>
		</Dialog>
    </div>
  );
}
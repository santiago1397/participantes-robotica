import React,{ useState } from 'react'
import './members.css'
import { Modal, Typography, Button, Box, Tooltip, IconButton } from "@mui/material"
import Form from './form/Form'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Members( members, setmembers) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: '25px',
    p: 0,
  };



  return (
    <div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Form />
          </Box>
        </Modal>
      </div>

      <h1>
        Integrantes del equipo de robótica
      </h1>
      <div className='inputs-wrapper top-part'>
        <div className="input-label">
          <label htmlFor="nombres">Integrantes:</label>
        </div>
        <button type="button" onClick={handleOpen} className="add-member-btn">Agregar integrante +</button>
      </div>

      <div className="dashboard">
        <div className="dashboard-item">
          <div className="dashboard-item-property">nombre</div>
          <div className="dashboard-item-property">Apellido</div>
          <div className="dashboard-item-property">Cédula</div>
          <div className="dashboard-item-property">Edad</div>
          <Tooltip >
            <IconButton size='small' aria-label='action' onClick={handleOpen}>
              <DeleteIcon fontSize='small' />
            </IconButton>
          </Tooltip>
        </div>
        
      </div>


    </div>
  )
}

import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Card, Container, Grid, TextareaAutosize, Typography } from '@mui/material';
import { useState } from 'react';
import './Form.css';



const Form = (  ) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  return (
<Container sx={{marginTop:'20px'}}>

    
      <Box component="form"  className = 'formAlign' sx={{marginTop:'50px'}}>
        
      <Grid container spacing={0}>
        <Grid item xs={12} sm={8} className='fontSize' sx={{marginTop:'20px'}}> <TextField fullWidth
          required
          id="outlined-required"
          type="email"
          label="Enter your email"
          onChange={(event) => setEmail(event.target.value)}
          name= "email"
          value={email}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={8} className='fontSize'sx={{marginTop:'20px'}}> 
        <TextField fullWidth
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(event) => setPassword(event.target.value)}
          name= "password"
          value={password}
        />
        </Grid>
      </Grid>
      <Grid container spacing={0} >
        <Grid item xs={12} sm={8} className='fontSize' sx={{marginTop:'20px'}}>
        <TextField fullWidth
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          onChange={(event) => setPassword(event.target.value)}
          name= "message"
          value={message}
        />  
        </Grid>
      </Grid>
      <div >
        <Button className='buttonSubmit1' type='submit' variant='contained' sx={{marginTop:'20px'}}>
          SEND
          </Button> 
      </div>
      </Box>


      
    </Container>
  )
}

export default Form;

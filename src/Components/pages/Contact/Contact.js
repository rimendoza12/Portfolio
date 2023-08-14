import { Container, Grid, IconButton, Paper, Typography, styled } from '@mui/material'
import React from 'react'
import Form from '../Form/Form'
import './Contact.css';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';




function Contact() {
  return (
    <Container id="Contact" className='contactSection' >
        <Typography variant='h5' align='center' sx={{paddingTop:'70px'}}>CONTACT</Typography> 
        <Container sx={{display:'flex'}}>
        <Form/>
     
        <Container sx={{marginTop:'100px'}}>
        <Typography variant='h5' >DROP ME A MESSAGE</Typography> 
        <IconButton sx={{color:''}}><CallIcon/>09771025244</IconButton>
        <IconButton><EmailIcon/>riza_s_mendoza@yahoo.com</IconButton>
        <IconButton><HomeIcon/>Lipa,Batangas</IconButton>
       </Container>
       
        </Container>
       
 
        

         
        
    </Container>
  )
}

export default Contact

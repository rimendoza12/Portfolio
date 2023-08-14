import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import './Home.css';
import NavBar from '../NavBar/NavBar';
import ReactRotatingText from 'react-rotating-text'



function Home() {
  return (
    <Container id="Home" className="homeSection" >
        <NavBar />
        <Typography variant='h6' align='center'sx={{color:'#469b4c'}}>
          Welcome To My Website 
        </Typography>
        <Typography variant='h4' align='center'sx={{color:'#469b4c'}}>Hi,I'm RIZA</Typography>
        
        <Typography variant='h6' align='center' sx={{color:'#e84545'}}>
          <ReactRotatingText  items ={["Full-Stack Web Developer","Web Designer"] } />
        </Typography>
        <Button variant='contained' color='success'>
          Contact Me
        </Button>
    
      

      
    </Container>
  )
}

export default Home

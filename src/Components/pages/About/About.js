import { Box, Card, CardHeader, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import './About.css';
import { styled } from '@mui/material/styles';
import reactLogo1 from '../Images/HTML.png';
import reactLogo2 from '../Images/CSS3.png';
import reactLogo3 from '../Images/Bootstrap.png';
import reactLogo4 from '../Images/Javascript.png';
import reactLogo5 from '../Images/reactjs.png';
import reactLogo6 from '../Images/PHP.png';
import reactLogo7 from '../Images/mysql.png';
import reactLogo8 from '../Images/Laravel.png';

import SvgIcon from '@mui/material/SvgIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HtmlIcon from '@mui/icons-material/Html';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function About() {
  return (
    <Container className='aboutSection' id="About">
      <Typography variant='h5' align='center'sx={{paddingTop:'80px'}}  >
      ABOUT ME
    </Typography>
    <Typography sx={{marginTop:'20px'}}>
        I'm a career shifter searching for opportunities in the IT industry. I recently finished the Kodego Bootcamp training
        with Full-Stack Web Development course.This training equipped me with the knowledge and skill on different tech stacks
        to create and develop web designs and applications.
    </Typography>
    <Typography variant='h5' align='center'sx={{marginTop:'30px'}} >
       SKILLS
    </Typography>
    <Grid container spacing={2} align='center' sx={{marginTop:'30px'}}>
        <Grid item xs={12} sm={3}>
        <div><img src={reactLogo1}/>
        <Typography>
            HTML
        </Typography>
        </div>
            
        </Grid>
        <Grid item xs={3} sm={3}>
        <div><img src={reactLogo2}/>
        <Typography>
           CSS
        </Typography>
        </div>
        </Grid>
        <Grid item xs={3} sm={3}>
        <div><img src={reactLogo3}/>
        <Typography>
           Bootstrap
        </Typography>
        </div>
        </Grid>
        <Grid item xs={3} sm={3}>
        <div><img src={reactLogo4}/>
        <Typography>
            Javascript
        </Typography>
        </div>
        </Grid>
        <Grid item xs={3} sm={3}>
        <div><img src={reactLogo5}/>
        <Typography>
           Reactjs
        </Typography>
        </div>
        </Grid>
        <Grid item xs={3} sm={3}>
        <div><img src={reactLogo6}/>
        <Typography>
           PHP
        </Typography>
        </div>
        </Grid>
        <Grid item xs={3} sm={3}>
        <div><img src={reactLogo7}/>
        <Typography>
            MySQL
        </Typography>
        </div>
        </Grid>
        <Grid item xs={3} sm={3}>
        <div><img src={reactLogo8}/>
        <Typography>
            Laravel
        </Typography></div>
        </Grid>
      </Grid>
    
        
    </Container>
  )
}

export default About

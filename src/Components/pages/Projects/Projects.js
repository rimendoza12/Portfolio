import React from 'react';
import './Projects.css';
import { Box, Button, Card, CardActions, CardContent, Container, Grid, Paper, Typography, styled } from '@mui/material';
import Gallery from '../Gallery/Gallery';
import Cards1 from '../Cards1/Cards1';
import Cards2 from '../Cards2/Cards2';
import Cards3 from '../Cards3/Cards3';






// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));







function Projects() {
  return (
    <Container className='projectSection' id="Projects">
      <Typography variant="h5" align="center" sx={{paddingTop:"80px"}}>
      PROJECTS
        </Typography>
      <Grid container spacing={0} sx={{paddingTop:"30px"}} >
     
    <Grid item xs={12} sm={4} >
      
   
    <Card sx={{ minWidth: 275,display:'flex',justifyContent:'center',marginTop:'100px'}}>
      <CardContent >
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom align="center">
        Tree Cafe
        </Typography>
        <Typography variant="body2" align='center'>
          A one-page e-commerce website for coffee products.
          <br />
        </Typography>
      </CardContent>  
    </Card>
  </Grid>
  <Grid item xs={12} sm={8} >
   <Cards1/>
  </Grid>
  <Grid item xs={12} sm={8}>
    <Cards2/>
  </Grid>
  <Grid item xs={12} sm={4} >
  <Card sx={{ minWidth: 275,display:'flex',justifyContent:'center',marginTop:'100px'}}>
      <CardContent >
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom align="center">
        Luxe Bijoux
        </Typography>
        <Typography variant="body2" align='center'>
          An e-commerce website for jewelry products.
          <br />
        </Typography>
      </CardContent>  
    </Card>
  </Grid>
  <Grid item xs={12} sm={4} >
  <Card sx={{ minWidth: 275,display:'flex',justifyContent:'center',marginTop:'100px'}}>
      <CardContent >
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom align="center">
        Arellano Music Studio
        </Typography>
        <Typography variant="body2" align='center'>
          A service website for those who wanted to learn music instruments.
          <br />
        </Typography>
      </CardContent>  
    </Card>
  </Grid>
  <Grid itemxs={12} sm={8}  >
    <Cards3/>
  </Grid>
</Grid>
 
    </Container>
  )
}

export default Projects

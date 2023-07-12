import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Base from './Base';
import LinearProgress from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import PrimarySearchAppBar from './PrimarySearchAppBar';



function Cards() {
  return (
  
    <Base>
   <Box sx={{ m: 2 }} >

    <Grid container spacing={2}>
    <Grid item lg={12}>
      <PrimarySearchAppBar/>
    </Grid>  

    <Grid item lg={3}>
      <Card1 
      title={'EARNINGS (MONTHLY)'}
      value={'$40,000'} 
      borderColor={ 'primary.main'}/>
    </Grid>
    <Grid item lg={3} >
      <Card1 
      title={'EARNINGS (ANNUAL)'}
      value={'$215,000 '}
      borderColor={ 'success.main'}/>
    </Grid>
    <Grid item lg={3} >
     <Card1 
    title={'TASKS'}
    value={'50%'}
    borderColor={ 'secondary.main'}/>
    </Grid>
    <Grid item lg={3} > 
     <Card1 
    title={'PENDING REQUESTS'}
    value={'18'}
    borderColor={ 'error.main'}/>
    </Grid>
    <Grid item lg={6} >
     <Card2
     title={'Default Card Example'}
     content={"This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example."}/>
    </Grid>
    <Grid item lg={6} >
    <Card2
     title={'Dropdown Card Example'}
     content={"Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.     "}/>
     </Grid>
     <Grid item lg={6} >
     <Card2
     title={'Basic Card Example     '}
     content={"The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!     "}/>
      </Grid>
      <Grid item lg={6}>
     <Card2
     title={'Collapsable Card Example'}
     content={"This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!"}/>
   </Grid>

  </Grid>
  </Box>
  </Base>

  )
}

function Card1({title,value,borderColor}){
  return(
    <div>
 
        <Card size="lg" sx={{ borderLeft: 5, borderColor:borderColor}}>
        <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
         {title}<br/>
         {value}
       {title=='TASKS'? <LinearProgress variant="determinate" value={parseInt(value) }  />:null}
        </Typography>
       
      </CardContent>
     
    </Card>
    </div>
  )
}
function Card2({title,content}){
  return(
    <div>
      <Card >
        <CardHeader title={title}></CardHeader>
        <Divider/>
        <CardContent><Typography paragraph>{content}</Typography>

        <Typography paragraph></Typography>
        </CardContent>
        </Card>
    </div>
  )
}

export default Cards
import React from 'react'
import Base from './Base'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import Typography from '@mui/material/Typography';
import {  blue, red } from '@mui/material/colors';

import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import FlagIcon from '@mui/icons-material/Flag';
import InfoIcon from '@mui/icons-material/Info';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import PrimarySearchAppBar from './PrimarySearchAppBar';
 





function Buttons() {
  return (
  

      <Base>
       <Box sx={{ m: 2 }} >
        <PrimarySearchAppBar />
        <Grid container xs={12}spacing={4}>
          <Grid item xs={6}  >
            <Grid item >
              <CirecleButtons/>
            </Grid>
            <br/>
            <Grid item   >
              <BrandButton/>
              </Grid>

          </Grid>
          <Grid item xs={6}>
            <SplitButton/>
          </Grid>
          
        </Grid>

      </Box>
      </Base>
  )
}
function CirecleButtons() {
  return (
    
      
      <div>
        <Card>
        <CardHeader title="Circle Button"></CardHeader>
        <Divider/>
        <CardContent><Typography paragraph>Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!</Typography>

        <Typography paragraph>
        <span className='btn-title'>.btn-circle</span><br/>
        <IconButton > <FacebookRoundedIcon color="primary"  /></IconButton>
        <IconButton > <CheckCircleRoundedIcon color="success" /></IconButton>
        <IconButton > <ErrorRoundedIcon sx={{ color: blue[400] }} /></IconButton>
        </Typography>
        
       
        <Typography paragraph>
          <span className='btn-title'>.btn-circle .btn-sm</span><br/>

       
        <IconButton > <FacebookRoundedIcon color="primary" fontSize="small" /></IconButton>
          <IconButton > <CheckCircleRoundedIcon color="success" fontSize="small"/></IconButton>
          <IconButton > <ErrorRoundedIcon sx={{ color: blue[400] }} fontSize="small"/></IconButton>
        </Typography>
       
        
        <Typography paragraph>
        <span className='btn-title'>.btn-circle .btn-lg</span><br/>
        <IconButton > <FacebookRoundedIcon color="primary" fontSize="large"/></IconButton>
          <IconButton > <CheckCircleRoundedIcon color="success" fontSize="large"/></IconButton>
          <IconButton > <ErrorRoundedIcon sx={{ color: blue[400] }}  fontSize="large"/></IconButton>
       </Typography>

       </CardContent>
        </Card>

       
      </div>
      
  )
}

function SplitButton() {
  return (
    
     <div className='splitButton'>
        <Card >
        <CardHeader title="Split Buttons with Icon"></CardHeader>
        <Divider/>
        <CardContent>
          <Typography paragraph>Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.
          </Typography>

        <Typography paragraph >
        <Grid container spacing={1}>
          <Grid item xs={12}><ButtonGroup variant="contained" color="primary" ><Button><FlagIcon/></Button><Button variant="contained" >Split button Primary</Button> </ButtonGroup></Grid>
          <Grid item xs={12}><ButtonGroup variant="contained" color="success"><Button><DoneIcon/></Button><Button variant="contained" >Split button Success</Button></ButtonGroup></Grid>
          <Grid item xs={12}><ButtonGroup variant="contained" color="info"><Button><InfoIcon/></Button><Button variant="contained"  >Split button Info</Button></ButtonGroup></Grid>
          <Grid item xs={12}><ButtonGroup variant="contained" color="warning" ><Button><WarningOutlinedIcon/></Button><Button variant="contained" >Split button Warning</Button></ButtonGroup></Grid>
          <Grid item xs={12}><ButtonGroup variant="contained" color="error"><Button><DeleteIcon/></Button><Button variant="contained"  >Split button Danger</Button></ButtonGroup></Grid>
          <Grid item xs={12}> <ButtonGroup variant="contained" color="secondary"><Button><ArrowRightAltIcon/></Button><Button variant="contained"  >Split button secondary</Button></ButtonGroup></Grid>
        </Grid>

        </Typography>
        
       
        <Typography paragraph>
        Also works with small and large button classes!
        </Typography>


       
        <Grid container spacing={1}>
        <Grid item xs={12}> <ButtonGroup variant="contained" color="primary" ><Button><FlagIcon/></Button><Button variant="contained" size="small">Split button Small</Button> </ButtonGroup></Grid>
        <Grid item xs={12}> <ButtonGroup variant="contained" color="primary" ><Button><FlagIcon/></Button><Button variant="contained"  size="large">Split button Large</Button></ButtonGroup> </Grid>
        </Grid>
  
       
        
        

       </CardContent>
        </Card>

       
      </div>
      
  )
}

function BrandButton(){
  return(

    <div className='brandbutton'>
        <Card >
        <CardHeader title="Brand Buttons"></CardHeader>
        <Divider/>
        <CardContent>
          <Typography paragraph>Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.
            You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.
          </Typography>

          <Grid container  textAlign={'center'} spacing={1}>
            
          <Grid item xs={12} justifyContent="center"><Button variant="contained" color="error" startIcon={<GoogleIcon/>} style={{padding: "0px 170px"}}> .btn-google</Button> </Grid>
          <Grid item xs={12} justifyContent="center"><Button variant="contained" color="primary" startIcon={<FacebookIcon/>} style={{padding: "0px 162px"}}>.btn-facebook</Button> </Grid>
        </Grid>
        
       
       </CardContent>
        </Card>

       
      </div>

  )
}


export default Buttons
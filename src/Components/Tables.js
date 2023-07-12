import React from 'react'
import Base from './Base'
import { DataGrid  } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';


import {GridToolbarQuickFilter} from '@mui/x-data-grid';

import PrimarySearchAppBar from './PrimarySearchAppBar';


const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    width: 90 
  },
  {
    field: 'Name',
    headerName: 'Name',
    width: 150,

  },
  {
    field: 'Postition',
    headerName: 'Position',
    width: 150,
    
  },
  {
    field: 'Office',
    headerName: 'Office',
    width: 110,
    
  },
  {
    field: 'Age',
    headerName: 'Age',
    type:Number,
    width: 110,

  },
  {
    field: 'StartDate',
    headerName: 'Start Date',
    width: 110,

  },
  {
    field: 'Salary',
    headerName: 'Salary',
    width: 110,

  },
  
];

function QuickSearchToolbar() {
  return (
    <Box
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <PrimarySearchAppBar/>
      <GridToolbarQuickFilter
        quickFilterParser={(searchInput) =>
          searchInput
            .split(',')
            .map((value) => value.trim())
            .filter((value) => value !== '')
        }
      />
    </Box>
  );
}


function Tables({tableData}) {
  
  return (
    <Base>
    <Container maxWidth="xl" style={{overflow: 'auto'}}>
   
    <Box sx={{ height: 400, width: '100%' }}>
   
    <DataGrid
        rows={tableData}
        columns={columns}
    
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5,10,20]}
        slots={{ toolbar: QuickSearchToolbar }}
      />
  
  </Box>
  </Container>
  </Base>
  )
}

export default Tables
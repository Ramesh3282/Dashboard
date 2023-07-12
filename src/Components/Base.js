import React from 'react';

import { Sidebar, Menu, MenuItem,SubMenu  } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import BuildIcon from '@mui/icons-material/Build';
import PagesIcon from '@mui/icons-material/Pages';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';
import { Routes, Route, Link } from "react-router-dom";
import { colors } from '@mui/material';
import { blue } from '@mui/material/colors';







function Base({children}) {
    const navigate=useNavigate()
  return (

    <div style={{ display: "flex"}} >
     
        <Sidebar className="sidebar">
            <Menu>
                <MenuItem className="menu1" icon={<DashboardIcon />} onClick={()=>navigate("/")}>
                    <h2>Dashboard</h2>
                </MenuItem>
                <SubMenu label="Components" icon={<SettingsSharpIcon/>}>
                   
                    <MenuItem onClick={()=>navigate("/buttons/")}> Buttons </MenuItem>
                    <MenuItem onClick={()=>navigate("/card/")} > Cards </MenuItem>

                   
                </SubMenu>

                <SubMenu label="Utilities" icon={<BuildIcon/>}>
                    <MenuItem> Colors </MenuItem>
                    <MenuItem> Borders </MenuItem>
                    <MenuItem> Animations </MenuItem>
                    <MenuItem> Others </MenuItem>
                </SubMenu>

                <SubMenu label="Pages" icon={<PagesIcon/>}>
                    <MenuItem> Login </MenuItem>
                    <MenuItem> Register </MenuItem>
                    <MenuItem> Forget Password </MenuItem>
                    <MenuItem> 404 Pages </MenuItem>
                    <MenuItem> Blank Pages </MenuItem>
                </SubMenu>
        
                <MenuItem icon={<BarChartIcon/>}> Charts </MenuItem>
                <MenuItem icon={<TableChartIcon />} onClick={()=>navigate("/table")}> Tables </MenuItem>
            
            </Menu>
       </Sidebar>
   
        {children}
       
      
    </div>
   
  )
}

export default Base
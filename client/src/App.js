import React, { useState, useEffect } from "react";

import Home from "./Components/home/Home";

import { TextField, Button, Typography, Paper, Select, MenuItem } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Components/navbar/Navbar";
import {
    BrowserRouter,
    Routes,
    Route,
    Redirect,
    withRouter,
    useHistory,
  } from "react-router-dom";

const App =() =>{
    

    useEffect(() => {
      
        
        
    }, []);
   
    
    
    return(

      
        <BrowserRouter style={{ border: 'none', boxShadow: 'none', padding: 0 }}>
      
            <Routes style={{ border: 'none', boxShadow: 'none', padding: 0 }}>
                
                <Route path="/" Component={Home} />
                {/*<Route path="/insert" Component={Insert} />*/}
                {/*<Route path="/view" Component={View} />*/}
            </Routes>
        </BrowserRouter>

    )
}

export default App;
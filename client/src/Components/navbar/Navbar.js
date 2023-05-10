import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Select, MenuItem, Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { NavLink } from "react-router-dom";

const Navbar = () =>{
    const classes= useStyles();
    const [activeSection, setActiveSection] = useState("p1");
    useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll('section');
          let currentSection= Array.from(sections)[Math.floor((window.scrollY+window.innerHeight/2)/window.innerHeight)]
          const currentId = currentSection ? currentSection.getAttribute('id') : '';
            
          window.history.replaceState(null, null, `#${currentId}`);
          setActiveSection(currentId);
        
        };
        console.log(activeSection)
        window.addEventListener('scroll', handleScroll);
          
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);
    const handleClick = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <>
            <div className={classes.indicator}></div>
            <div className={classes.navbar}>
                
                <div className={activeSection=='p1' ?classes.active: classes.link}>Workscape</div>
                <div className={activeSection=='p2' ?classes.active: classes.link}>About</div>
                <div className={activeSection=='p3' ?classes.active: classes.link}>Testimonials</div>
                <div className={classes.link} activeClassName="active">Jobs</div>
                <div className={classes.link} activeClassName="active">Talent</div>
                <div className={classes.link} activeClassName="active">Log In</div>

                
                
                
                   
            </div>
            
        </>
    )
}

export default Navbar;
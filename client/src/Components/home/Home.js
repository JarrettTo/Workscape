import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Select, MenuItem, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import Navbar from "../navbar/Navbar";
import Typewriter from 'typewriter-effect';
import logo from "./logo1.png"; 
import banner from "./Startup.png";   
import elem1 from "./element 1.png";
import elem2 from "./2.png";
import elem3 from "./3.png";
import elem4 from "./element 4.png";

const Home = () =>{
    useEffect(() => {

    }, []);
    const classes = useStyles();
    
    return(
        <>
        <Navbar/>

        
        <Grid container className={classes.grid} id='#p1'  >

            <Grid item container className={classes.page1}   xs={12}>
                <Grid item lg={6} xs={12} className={classes.textCont} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                
           
        
                <Typography className={classes.text} >Jumpstart Your<br /><div className={classes.text2}> <Typewriter options={{autoStart: true, loop: true, delay: 40, strings:["Career", "Business", "Start-up", "Passion"]}}/></div></Typography>
                <Typography className={classes.subtext}>Find the next piece of the puzzle here, whether <br/> clients or freelancers, at Workscape.</Typography>
                <Button variant='contained' className={classes.button}>Learn More</Button>
         
                </Grid>
                <Grid item lg={4} xs={12} className={classes.bannerCont}>
                
                <img src={banner} className={classes.banner}></img>
               
                
                </Grid>
            </Grid>
         
            <Grid item container className={classes.page2} xs={12}>
                <Grid item xs={12} className={classes.textCont2} >
                    <Typography className={classes.mainText2} textAlign="center">Find the missing piece <br/><div className={classes.highlightedText2}>to your puzzle</div></Typography>
                </Grid>
                <Grid item container className={classes.cardCont2} xs={12}>
                    <div className={classes.card}>
                        <div className={classes.cardHeader}>
                            <h2>Opportunities</h2>
                        </div>
                        <div className={classes.cardBody}>
                            <p className={classes.cardText}>Browse through the many opportunities available at Workscape, and fight the right fit for you. </p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardHeader}>
                            <h2>Talent</h2>
                        </div>
                        <div className={classes.cardBody}>
                            <p className={classes.cardText}>Find and curate the talent you need that'll take your work to the next level with Workscape. </p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.cardHeader}>
                            <h2>Safety</h2>
                        </div>
                        <div className={classes.cardBody}>
                            <p className={classes.cardText}>Workscape guarantees safety and fairness between both client and freelancer at all times through the platform's escrow and activity system.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
       
        </Grid>

        
        
        </>
        

    )
}

export default Home;
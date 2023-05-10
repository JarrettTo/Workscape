import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import opportunity from "./opportunities.jpg"
export const useStyles = makeStyles((theme) => ({
    grid: { 

        display: 'flex',
   
        alignContent:"center",
        justifyItems:'center',
        alignItems:'center',
 
        padding: '0px',
        margin: '0px',
        border: 'none', 
        boxShadow: 'none',
    },
    bg: { 
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
  
   
    },
    grid2 : { 
        height: '100vh',
        display: 'flex',
   
        alignContent:"center",
        justifyItems:'center',
        alignItems:'center',
        justifyContent:'center',
        align: 'center',
        background: 'radial-gradient(circle, #fff, #f5f5f5)',
        padding: '0px',
        margin: '0px',
        border: 'none', 
        boxShadow: 'none',
    },
    page1:{

        alignContent: 'center',
        alignItems:'center',
        justifyItems: 'center',
        justifyContent: 'center',
        align: 'center',
        marginTop:'5vw',
        paddingBottom:'6vw',
        '@media (max-width:1750px)': {
            marginTop: '4vw'
        },
        '@media (max-width:1280px)': {
            marginTop: '24vw'
        },
        
    },
    page2:{

        alignContent: 'center',
        alignItems:'center',
        justifyItems: 'center',
        justify: 'center',
        justifyContent: 'center',
        align: 'center',
      
        
    },
    
    text:{
        fontFamily: 'proxima-nova, sans-serif',
        fontWeight:500,
        display: 'inline-block',
        color: '#132639',
        outlineWidth:'10px',
        stroke: 'black',
        strokeWidth:'100px',
        '-webkit-text-stroke': '3px',
        fontSize:'10vw',
        marginBottom:"0px" ,
        marginTop:"0px",
        lineHeight:'1',
        textAlign: 'left',
        '@media (min-width:600px)': {
            fontSize: '70px',
        },
        '@media (min-width:960px)': {
            fontSize: '70px',
        },
        '@media (min-width:1281px)': {
            fontSize: '6vw',
        },
        '@media (max-width:1280px)': {
            textAlign: 'center'
        },
        
    },
    mainText2:{
        fontFamily: 'proxima-nova, sans-serif',
        fontWeight:500,
        display: 'inline-block',
        color: '#132639',
        outlineWidth:'10px',
        stroke: 'black',
        strokeWidth:'100px',
        '-webkit-text-stroke': '3px',
        fontSize:'10vw',
        marginBottom:"0px" ,
        marginTop:"0px",
        lineHeight:'1',
        align:'center',
        justifyItems: 'center',
        textAlign: 'center',
        '@media (min-width:600px)': {
            fontSize: '50px',
        },
        '@media (min-width:960px)': {
            fontSize: '60px',
        },
        '@media (min-width:1281px)': {
            fontSize: '5vw',
        },
        '@media (max-width:1280px)': {
            textAlign: 'center'
        },
        
    },
    highlightedText2:{
        fontFamily: 'proxima-nova, sans-serif',
        display: 'inline-block',
        fontWeight:500,
        color: '#0066cc',
        '-webkit-text-stroke': '4px',
        marginBottom:"0px" 
        
    },
    text2:{
        fontFamily: 'proxima-nova, sans-serif',
        display: 'inline-block',
        fontWeight:500,
        color: '#0066cc',
        '-webkit-text-stroke': '4px',
        marginBottom:"0px" 
        
    },
    banner:{
        position: 'relative',
        width: '38vw',
        height: 'auto',
        marginTop: '90px',
        zIndex: 2,
        '@media (max-width:600px)': {
            fontSize: '47vw',
        },
        '@media (max-width:1280px)': {
            width: '40vw',
        },

        
    },
    bannerCont:{
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        position: 'relative',
        display: 'flex',
 
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems:'center',
        justifyItems: 'center',
        justifyContent: 'center',
        justify: 'center'
        
        
    },
    textCont:{
        display: 'flex',
 
        flexDirection: 'column',
   


        alignItems:'flex-start',
        paddingLeft: '140px',
        justifyContent: 'flex-start',
        '@media (max-width:1280px)': {
            paddingLeft: '0px',
            alignItems:'center',
        },
        
        
    },
    textCont2:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '10vh',
        
        
    },
    cardCont2:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    subtext:{
        fontFamily: 'proxima-nova, sans-serif',
        display: 'inline-block',
        fontWeight: 400,
        fontSize:'20px',
        marginTop:'40px',
        '-webkit-text-stroke': '0.5px',
        lineHeight:'1.2',
        textAlign: 'left',
        '@media (max-width:1280px)': {
            textAlign: 'center'
        },
    },
    subtext2:{
        fontFamily: 'proxima-nova, sans-serif',
        display: 'inline-block',
        fontWeight: 500,
        fontSize:'20px',
        marginTop:'40px',
        color: '#2d5986',
        '-webkit-text-stroke': '1.4px',
        lineHeight:'1.2',
        textAlign: 'center',
        '@media (max-width:1280px)': {
            textAlign: 'center'
        },
    },
    button:{
        fontFamily: 'proxima-nova, sans-serif',
        fontWeight: 400,
        blockSize: 1000,
        padding: '16px 32px',
        color: 'white',
        background: '#0066cc',
        fontSize:'20px',
        alignContent: 'center',
        borderRadius: 100,
        marginTop:'60px',
        marginBottom:"-40px"
    },

    blob: {
        position: 'relative',
        width: '25vw',
        height: '25vw',
        marginLeft: '0px',

        backgroundColor: '#FFF',
        zIndex: 0,
        borderRadius: '24% 76% 35% 65% / 27% 36% 64% 73%'
    },
    
    logo:{
        paddingBottom: 10,
        paddingTop: 0,
        marginBottom:"10px",
        width: '30vw',
        height: 'auto',
        '@media (min-width:0px)': {
            width:'90px'
        },
        '@media (min-width:960px)': {
           
            marginBottom:"0px",
        },
        '@media (min-width:1281px)': {
            width:'170px'
        },
    },
    card: {
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        backgroundColor: 'rgba(140, 179, 217, 0.1)',
        margin: '2vw',
        width:'380px',
        height: '390px',
        transform: 'translateY(0)',
        transition: 'transform 0.4s ease-in-out',
        textAlign: 'left',
        overflow: 'hidden',
      
        '@media (min-width:970px)': {
          width:'380px',
          height: '390px'
        },
        '&:hover' : {
            transform: 'translateY(-15px)',
            transition: 'transform 0.4s ease-in-out',
        },
        
        '&:hover $imgCont': {
          height: '0px',
          transition: 'height 0.6s ease-in-out'
        },
        
        '&:hover $cardText': {
          marginTop: '-280px',
          transition: 'margin-top 0.6s ease-in-out'
        },
        '&:hover $cardButton': {
            marginTop: '-200px',
            transition: 'margin-top 0.7s ease-in-out'
        }
      },
   imgCont:{
        width: "100%", 
        height: "170px",
    
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        overflow: "hidden",
        transition: 'height 0.6s ease-in-out'
    

   },
   cardImg:{
        maxWidth: "100%", 
        objectFit: "cover",
        borderRadius:"20px",
        filter: 'grayscale(100%) '
   },
   cardText:{
        fontFamily: 'proxima-nova, sans-serif',
        fontWeight:500,
        wordWrap: 'break-word',
        marginTop: '0px',
        marginLeft:'38px',
        marginRight: '30px',
        overflowWrap: 'break-word',
        maxWidth: '1000px',
        fontSize: '18px',
        flex: 2   ,
        '@media (min-width:970px)': {
            fontSize: '16px',
        },
        transition: 'margin-top 0.6s ease-in-out',
    },
    cardHeader:{
        fontFamily: 'proxima-nova, sans-serif',
        fontWeight:500,
        flex: 1,
        display: 'inline-block',
        color: '#0066cc',
        outlineWidth:'10px',
        marginLeft:'38px',
        marginRight: '30px',
        
        stroke: 'black',
        strokeWidth:'100px',
        '-webkit-text-stroke': '1px',
        fontSize: '23px',
        marginBottom:"0px" ,
        marginTop:"0px",
        lineHeight:'1',
        textAlign: 'left',
        
        '@media (min-width:970px)': {
            fontSize: '23px',
        },
    },
    cardButton:{
        fontFamily: 'proxima-nova, sans-serif',
        fontWeight: 400,
        blockSize: 1000,
        padding: '16px 26px',
        color: 'white',
        background: '#0066cc',
        fontSize:'14px',
        alignContent: 'center',
        borderRadius: 100,
        marginBottom:'-80px',
        marginLeft: '36px',
        transition: 'margin-top 0.5s ease-in-out',
        
    },
    sponsors:{
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        
        backgroundColor: 'rgba(140, 179, 217, 0.15)',
        marginBottom: "8vw",
        width:'75%',
        height: '9vw',
        transform: 'translateY(0)',
        transition: 'transform 0.4s ease-in-out',
        textAlign: 'left',
        
    },
    sponsor:{
        maxWidth: "100%",
        maxHeight: '100%', 
        objectFit: "contain",
        borderRadius:"20px",
        filter: 'grayscale(100%) '
   },
  // More style classes here
}));

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    navbar: {
        display: 'inline-flex',
        position: 'fixed',
        overflow: 'hidden',
        width: '1000px',
        'max-width': '100%',
        backgroundColor: "#fff",
        padding: '0 20px',
        borderRadius: '40px',
        boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.2)',
        top: 50,
        zIndex:999,
        left: '50%',
        transform: 'translateX(-50%)'
    },
    indicator: {
        position: 'absolute',
        bottom: 100,
        zIndex: 10,
        height: '3px',
        backgroundColor: 'blue',
        
    },
    link:{
        color: '#132639',
        padding: '20px',
        textDecoration: 'none',
        fontFamily: 'proxima-nova, sans-serif',
        lineHeight: '1.5',
        fontSize: '18px',
        fontWeight:500,
        marginLeft: '10px', 
        marginRight: '10px',
        '&:hover': {
          
    
         
            display: 'inline-block',
            position: 'relative', // set position to relative to position the background
            '&::after': { // use ::after to create the background
              content: '""',
              position: 'absolute',
              
              bottom: 0, // position the background at the bottom of the NavLink element
              left: '0',
              width: '100%', // make the background serve as an underline
              height: '5px',
              backgroundColor: '#d6e0f5',
              borderRadius: '5px'
            },
        },
        '&.active': {
            fontWeight: 'bold',
    
         
            display: 'inline-block',
            position: 'relative', // set position to relative to position the background
            
            '&::after': { // use ::after to create the background
              content: '""',
              position: 'absolute',
              
              bottom: 0, // position the background at the bottom of the NavLink element
              left: '0',
              width: '100%', // make the background serve as an underline
              height: '5px',
              background: '#0066cc',
              borderTopLeftRadius: '5px',
              borderTopRightRadius: '5px'
            },
          },
 

    },
    active:{
      color: '#132639',
      padding: '20px',
      textDecoration: 'none',
      fontFamily: 'proxima-nova, sans-serif',
      lineHeight: '1.5',
      fontSize: '18px',
      fontWeight:500,
      marginLeft: '10px', 
      marginRight: '10px',
      '&:hover': {
        
  
       
          display: 'inline-block',
          position: 'relative', // set position to relative to position the background
          '&::after': { // use ::after to create the background
            content: '""',
            position: 'absolute',
            
            bottom: 0, // position the background at the bottom of the NavLink element
            left: '0',
            width: '100%', // make the background serve as an underline
            height: '5px',
            backgroundColor: '#d6e0f5',
            borderRadius: '5px'
          },
      },
     
      fontWeight: 'bold',

    
      display: 'inline-block',
      position: 'relative', // set position to relative to position the background
      
      '&::after': { // use ::after to create the background
        content: '""',
        position: 'absolute',
        
        bottom: 0, // position the background at the bottom of the NavLink element
        left: '0',
        width: '100%', // make the background serve as an underline
        height: '5px',
        background: '#0066cc',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '5px'
      },
        

  },
  
   


}))
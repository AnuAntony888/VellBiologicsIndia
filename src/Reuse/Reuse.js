import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
export function TypographyText(props) {
  return (
    <Typography
      sx={{
        component:props.component,
        borderRight: props.borderRight,
        fontSize: props.fontSize,
        width: props.width,
        textAlign: props.textAlign,
        color: props.color,
        padding: props.padding,
        textTransform: props.textTransform,
        fontWeight: props.fontWeight,
        paddingRight: props.paddingRight,
        paddingLeft: props.paddingLeft,
        paddingTop: props.paddingTop,
        paddingBottom: props.paddingBottom,
        fontWeight: props.fontWeight,
        transform: props.transform,
        margin: props.margin,
        fontFamily: "'Poppins', sans-serif",
        marginTop: props.marginTop,
        "&:hover": {
          color: props.hovercolor,
        },
      }}
      variant={props.variant}
      component={props.component}
      className={props.className}
      fontFamily="'Poppins', sans-serif"
      dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
    >
      {props.Typography}
    </Typography>
  );
}

export function Buttons(props) {
  return (
    <Button
      variant={props.variant}
      sx={{
        bgcolor: props.bgcolor,
        textTransform: props.textTransform,
        color: props.color,
        float: props.float,
        fontSize: props.fontSize,
        width: props.width,
        height: props.height,
        fontWeight: props.fontWeight,
        marginBottom: props.marginBottom,
        transform: props.transform,
        minWidth: "100px",
        // fontFamily: 'Lato',
        fontFamily: "'Poppins', sans-serif",
        ":hover": {
          bgcolor: props.bgcolor1, // theme.palette.primary.main
          color: props.color1,
        },

        textTransform: "capitalize",
      }}
    >
      {props.Buttonname}
    </Button>
  );
}

export const Toastsucess = (message, success, theme) => {
  if (success) {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // theme: theme,
    });
  } else {
    toast.error(message, {
      position: "top-right",

      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
};


export const PaymentButton = ({ method, label, currentMethod, onClick }) => (
  <Button
    variant="contained"
    type="submit"
    sx={{
      bgcolor: currentMethod === method ? "green" : "#F7F7F7",
      color: currentMethod === method ? "white" : "black",
      textAlign: "left",
      width: "100%",
      textTransform: "capitalize",
      margin: "auto",
      p: "2px",
    }}
    onClick={onClick}
  >
    {label}
  </Button>
);


function BackgroundWithText(props) {
  return (
    <Box
      sx={{
  
         backgroundImage:`url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Set the height of the box
        display: 'flex',
        alignItems: 'center', // Vertically center text
        justifyContent: 'center', // Horizontally center text
        position: 'relative', // Ensure the text stays on top
      
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Optional: Add text shadow for contrast
      }}
    >
      <TypographyText
        Typography={props.Typography}
             fontWeigh="700"
        fontSize={props.fontSize}
        width={props.width}
        textAlign={props.textAlign}
        color={props.color}
        variant={props.variant}
      />
      {/* <Typography variant="h2">
        Text on Top of Background Image
      </Typography> */}
    </Box>
  );
}

export default BackgroundWithText;


export function CardFunction(props) {
  return (<>
    <Card sx={{width:'100%',height:'100%'}}>
      {/* <CardMedia
        sx={{
          height: props.height,
          backgroundRepeat:props.backgroundRepeat
        }}
        image={props.image}
        title="green iguana"
      /> */}
      <img src={props.image} alt="" style={{height: props.height,}} width={'100%'}/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div"
        sx={{fontFamily: "'Poppins', sans-serif",}}>
      {props.txt}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "'Poppins', sans-serif", }}>
        {props.txt1}
        </Typography>
      </CardContent>
   
    </Card>
  </>)
}


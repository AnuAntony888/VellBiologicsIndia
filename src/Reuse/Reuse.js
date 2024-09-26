import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Aos from "aos";
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
        minWidth: "150px",
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
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: 'url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/shelves-with-medications-at-a-modern-pharmacy-shop.jpg)', // Set your background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    {/* Overlay with transparent green color */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
          backgroundColor:'rgb(47, 108, 109)',
        opacity:'.8'
      }}
    />
  </Box>
  );
}

export default BackgroundWithText;


export function CardFunction(props) {
  return (<>
    <Card sx={{width:'100%',height:'100%'}}>
      {props.image?
        <img src={props.image} alt="" style={{ height: props.height, }} width={'100%'} />
        : ''}  <CardContent>
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


export const CardHeaderavtarHeading = (props) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Card
      sx={{
        bgcolor: props.bgcolorcard,
        border: props.bordercard,
       
        minHeight: props.minHeight,
        margin: "auto",
        width: props.width,
        boxShadow: "unset",
      }}
    >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <CardHeader
          title={
            <TypographyText
    
      
              color='#2F6C6D'
         
              fontFamily= "'Poppins', sans-serif"
              Typography={props.Typography}
              textAlign="left"
   fontSize='1.4rem'
         
            />
          }
          avatar={props.avatar}
        />
      </div>
      <div data-aos="fade-right" data-aos-duration="1500">
        <CardContent sx={{ gcolor: props.cardcontentbgcolor }}>
          <TypographyText
            color='gray'
            textAlign="left"
     
            fontFamily= "'Poppins', sans-serif"
            variant={props.variant1}
            Typography={props.Typography1}
            fontSize={props.fontSize}
          />
        </CardContent>
      </div>
    </Card>
  );
};
export const HomeIcon = (props) => (
  <Avatar 
    sx={{
      bgcolor: "#47A2A3",
      margin: "auto",
      width: props.width,
      height: props.height,
      transform: props.transform,
      zIndex: props.zIndex,
      position: props.position,
      float:props.float
    }}
  >
    {props.icon}
  </Avatar>
);
export const AboutText5 = [
  {
    width: {
      // sm: "300px",
      // md: "350px",
      // lg: "400px",
      // xs: "fit-content",
    },
    avatar: (
      <HomeIcon
        width="60px"
        height="60px"
        icon={<AdsClickIcon  sx={{ fontSize: 40, margin: "auto" }} />}
      />
    ),
    Typography: "Mission",
    Typography1:
      "At Vell Biologics, our mission is to bridge the healthcare gap for patients suffering from serious chronic and rare diseases by providing affordable, life-saving treatments. We aim to improve access to advanced therapies, foster hope, and transform the lives of those affected by rare conditions through innovation, strategic partnerships, and unwavering commitment to patient care."
  },

  {
    width: {
      // sm: "300px",
      // md: "350px",
      // lg: "400px",
      // xs: "fit-content",
    },
    avatar: (
      <HomeIcon
        width="60px"
        height="60px"
        icon={<VisibilityIcon sx={{ fontSize: 40, margin: "auto" }} />}
      />
    ),
    Typography: "Vision",
    Typography1:
      "Our vision is to become a global leader in the rare disease healthcare sector by revolutionizing the way rare diseases are treated. We strive to empower patients, expand access to affordable healthcare, and create a sustainable impact by advancing diagnostics, treatments, and patient support systems, ultimately transforming the healthcare landscape for rare diseases."
  },

  
];
export const renderText = (data) => (
  <>
    <TypographyText
      // {...textStyles}
      fontSize={data.fontSize}
      Typography={data.Typography}
      marginBottom={data.marginBottom}
      variant={data.variant}
      fontFamily= "'Poppins', sans-serif"
      textAlign={data.textAlign}
      component="div"
      fontWeight={data.fontWeight}
      color={data.color}
      padding={data.padding}
      paddingTop={data.paddingTop}
      paddingBottom={data.paddingBottom}
    />
  </>
);
export function DividerComp(props) {
  return (
    <div
      className="sep"
      style={{
        width: props.width,
        height: "4px",
        mt: props.mt,
        mb: "2%",

        background: props.background,
        margin: props.margin,
        marginBottom: props.marginBottom,
      }}
    ></div>
  );
}



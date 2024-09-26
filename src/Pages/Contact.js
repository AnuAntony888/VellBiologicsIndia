// import { Box, Grid, useMediaQuery } from '@mui/material'
// import React from 'react'
// import img1 from '../Assets/0.jpg'
// import { TypographyText } from '../Reuse/Reuse'

// const Contact = () => {
//     const isSmallScreen = useMediaQuery("(max-width:769px)");
//   return (
//     <Box id="contactme">
//       <Grid
//         container
//         spacing={4}
//         sx={{ alignContent: "center", justifyContent: "center" }}
//           >
//               <Grid item xs={12}>
//               <TypographyText
//             Typography={"Contact  Us"}
//             fontSize={isSmallScreen ? "1.5rem" : "2rem"}
//             textAlign="center"
//             color="#001270"
//           />
//               </Grid>
//               <Grid item xs={6} sx={{ maxHeight: '350px', overflow: 'hidden' }}>

// </Grid>

//               <Grid item xs={6}>

//               </Grid>
//           </Grid>
//           </Box>
//   )
// }

// export default Contact
import React, { useEffect, useState } from "react";

import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import HomeIcon from "@mui/icons-material/Home";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PublicIcon from "@mui/icons-material/Public";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Buttons, TypographyText } from "../Reuse/Reuse";

const Contact = () => {
  //   const { data } = Bannerimage8();
  //console.log(data, "data");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "black",
    boxShadow: "none", // Remove box shadow
    border: "1px solid #000", // Add a 1px solid border (you can change the color)
  }));
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, seterrors] = useState({});

  const handleEmail = (e) => {
    const errors = {};

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, email: "Email is required!" }));
    } else if (!regex.test(e.target.value)) {
      seterrors((prev) => ({
        ...prev,
        email: "This is not a valid email format!",
      }));
    } else if (regex.test(e.target.value)) {
      seterrors((prev) => ({ ...prev, email: "" }));
    }

    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    const errors = {};
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, message: "Name is required " }));
    } else {
      seterrors((prev) => ({ ...prev, message: " " }));
    }

    setMessage(e.target.value);
  };

  const handlePhone = (e) => {
    const errors = {};
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, phone: "Phone is required " }));
    } else {
      seterrors((prev) => ({ ...prev, phone: " " }));
    }

    setPhone(e.target.value);
  };

  const handleName = (e) => {
    const errors = {};
    if (!e.target.value) {
      seterrors((prev) => ({ ...prev, name: "Name is required " }));
    } else {
      seterrors((prev) => ({ ...prev, name: " " }));
    }

    setName(e.target.value);
  };

  const handleApi = async () => {
    try {
      if (!name || !email || !message || !phone) {
        console.log(name, email, message, phone, "aaaaaaa");
        toast.error("Please fill in all fields", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Toastsucess("Thanks for contacting us!!", "sucess", "light");
        return;
      }

      //   await Justdropdetails({
      //     name,
      //     email,
      //     message,
      //     phone,
      //   });
      toast.success("Thanks for contacting us!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Toastsucess("Thanks for contacting us!!", "sucess", "light");
    } catch (error) {
      // Toastsucess(error.message);
      toast.error(error.message, {
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
    setEmail(" ");
    setMessage(" ");
    setName(" ");
    setPhone(" ");
  };

  return (
    <div id="contactme">
      <Grid
        container
        spacing={2}
        className="homepadding2"
        sx={{ paddingBottom: "50px", pt: "20px" }}
      >
        {/**********************section1************************************ */}
        <Grid item xs={12} md={12} lg={12} sm={12} data-aos="fade-left">
          <TypographyText
            Typography={"Contact US"}
            variant="h4"
            textAlign="center"
            color="#132B2C"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ListItem sx={{ pl: 0, padding: "0" }}>
                <TypographyText
                  Typography={"Address"}
                  // fontSize="1rem"
                  color="gray"
                  fontWeight="700"
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Item>
                {Address.map((data, index) => (
                  <ListItem className="listitems" key={index}>
                    <ListItemText className="list_text">
                      <TypographyText
                        Typography={data.text}
                        fontSize=".9rem"
                      color="gray"
                        // fontWeight="600"
                      />
                      <TypographyText
                        Typography={data.text1}
                        fontSize=".9rem"
                      />
                    </ListItemText>
                  </ListItem>
                ))}
              </Item>
            </Grid>

            <Grid item xs={12} lg={4} md={4} sm={12}>
              <Item>
                <List>
                  <ListItem sx={{ pl: 0, padding: "0" }}>
                    <TypographyText Typography={"Email"} variant={".9rem"} />
                  </ListItem>
                  {Address1.map((data, index) => (
                    <ListItem className="listitems" key={index}>
                      <ListItemIcon className="footlistliwidth">
                        {data.SocialIcon}
                      </ListItemIcon>
                      <ListItemText className="list_text">
                        <TypographyText
                          Typography={data.text1}
                          fontSize=".9rem"
                        />
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Item>
            </Grid>
            <Grid item xs={12} lg={4} md={4} sm={12}>
              <Item>
                <List>
                  <ListItem sx={{ padding: "0" }}>
                    <TypographyText Typography={"Phone"} variant={".9rem"} />
                  </ListItem>
                  {Address2.map((data, index) => (
                    <ListItem className="listitems" key={index}>
                      <ListItemIcon className="footlistliwidth">
                        {data.SocialIcon}
                      </ListItemIcon>
                      <ListItemText className="list_text">
                        <TypographyText
                          Typography={data.text1}
                          fontSize=".9rem"
                        />
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Item>
            </Grid>
            <Grid item xs={12} lg={4} md={4} sm={12}>
              <Item>
                <List>
                  <ListItem sx={{ padding: "0" }}>
                    <TypographyText
                      Typography={"Website"}
                      variant={".9rem"}
                      //   fontWeight="600"
                    />
                  </ListItem>
                  {Address3.map((data, index) => (
                    <ListItem className="listitems" key={index}>
                      <ListItemIcon className="footlistliwidth">
                        {data.SocialIcon}
                      </ListItemIcon>
                      <ListItemText className="list_text">
                        <TypographyText
                          Typography={data.text1}
                          fontSize=".9rem"
                        />
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        {/**********************section1************************************ */}
        <Grid item xs={12} md={12} lg={6} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6} md={6}>
                          <p style={{
                              textAlign: "left", paddingBottom: "15px",
                              fontFamily: "'Poppins', sans-serif",
              }}>Name</p>
              <TextField
                variant="outlined"
                size="small"
                sx={{ bgcolor: "white" }}
                fullWidth
                type="text"
                placeholder="Entre Your Name"
                value={name}
                onChange={handleName}
              />
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <p style={{ textAlign: "left", paddingBottom: "15px" ,       fontFamily: "'Poppins', sans-serif",}}>Email</p>
              <TextField
                fullWidth
                // label="Email"
                variant="outlined"
                size="small"
                type="text"
                placeholder="Entre Your Email"
                sx={{ bgcolor: "white" }}
                value={email}
                onChange={handleEmail}
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <p style={{ textAlign: "left", paddingBottom: "15px",       fontFamily: "'Poppins', sans-serif", }}>Phone</p>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                type="text"
                value={phone}
                placeholder="Entre Your Phone"
                onChange={handlePhone}
                sx={{ bgcolor: "white" }}
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                          <p style={{
                              textAlign: "left", paddingBottom: "15px", 
                              fontFamily: "'Poppins', sans-serif",
              }}>
                Message
              </p>
              <TextField
                fullWidth
                type="text"
                id="outlined-multiline-flexible"
                size="small"
                multiline
                rows={4} // Specify the number of visible rows
                placeholder="Entre Your Message"
                value={message}
                onChange={handleMessage}
              />
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
              <Buttons
                Buttonname={"Contact Us"}
                fontWeight="bolder"
                color="white"
                bgcolor="#132B2C"
                bgcolor1="#132B2C"
                color1="white"
                textAlign="left"
                type="submit"
                onClick={handleApi}
              />
            </Grid>
          </Grid>
        </Grid>
          </Grid>
          <Box sx={{ backgroundColor: "#132B2C",padding:'5%'}} >
    <TypographyText
            Typography={<>Vell Biologics India 
Pvt. Ltd © 2024    Powered by Vedaham Business Solutions Pvt Ltd</>}
     
     textAlign= "center" 
            color="whitesmoke"
          />
      </Box>

    </div>
  );
};

export default Contact;
const Address = [
  {
    SocialIcon: <HomeIcon sx={{ color: "black" }} />,
    text: <> Corporate Office</>,
    text1: (
      <>
        SriDevi Nilaya #50,
        <br />
        7th Main Road,
        <br />
        Mahalakshmi Layout
        <br />
        Bangalore, India
      </>
    ),
  },
];

const Address1 = [
  {
    SocialIcon: <EmailIcon sx={{ color: "black" }} />,

    text1: "",
  },
];
const Address2 = [
  {
    SocialIcon: <PhoneIcon sx={{ color: "black" }} />,

    text1: <></>,
  },
];
const Address3 = [
  {
    SocialIcon: <PublicIcon sx={{ color: "black" }} />,

    text1: <></>,
  },
];

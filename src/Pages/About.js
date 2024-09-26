import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS
import { TypographyText } from "../Reuse/Reuse";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Grid
        container
        spacing={2}
        id="home"
        sx={{
          position: "relative",
          // padding: "5%",
          
          paddingTop: "7%",
          pl: "7%",
          pr: "7%",
          backgroundImage:
            "url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/shelves-with-medications-at-a-modern-pharmacy-shop.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: "rgba(47, 108, 109, 0.8)",
            backgroundColor:"rgba(19, 43, 44, 0.9)",
            zIndex: 1,
          }}
        />
        <Grid
          item
          xs={12}
          lg={7}
          md={6}
          sm={12}
          sx={{
            zIndex: 2,
            margin: "auto",
          }}
        ><div data-aos="fade-left">
          <TypographyText
            Typography={<>We care&nbsp;about people with Rare Disease</>}
            color="white"
            variant="h3"
            // fontSize="1.5rem"
            fontWeight="600"
            />
                   <TypographyText
              Typography={<>
                <br/>
Vell Biologics aims to transform India's $300 million rare disease market by enhancing access to life-saving treatments and addressing unmet patient needs.</>}
            color="white"
            // variant="h5"
            fontSize="1.2rem"
            // fontWeight="600"
            />
            </div>
        </Grid>
        <Grid item xs={12} lg={5} md={6} sm={12} sx={{ zIndex: 2, }}>
          <div data-aos="fade-left">
            <img
              src="https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/male-and-female-doctors-in-white-coats-with-stetho-2022-12-16-15-24-39-utc2.png"
              alt=""
              width={"85%"}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default About;

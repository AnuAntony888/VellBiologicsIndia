import React, { useEffect } from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        id="home"
        sx={{
          position: "relative",
          width: "100%",
          paddingTop: isSmallScreen ? "12%" : "100px",
          paddingLeft: "5%",
          paddingRight: "5%",
          backgroundImage:
            "url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/shelves-with-medications-at-a-modern-pharmacy-shop.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin:0
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            backgroundColor: "rgba(19, 43, 44, 0.9)",
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
        >
          <div data-aos="fade-up">
            <TypographyText
              Typography={<>We care&nbsp;about people with Rare Disease</>}
              color="white"
              variant={isSmallScreen ? "h3" : "h4"}
              // fontSize="1.5rem"
              fontWeight="600"
            />
            <TypographyText
              Typography={
                <>
                  <br />
                  Vell Biologics aims to transform India's $300 million rare
                  disease market by enhancing access to life-saving treatments
                  and addressing unmet patient needs.
                </>
              }
              color="white"
              fontSize={isSmallScreen ? "1.2rem" : '"1rem"'}
            />
          </div>
        </Grid>
        <Grid item xs={12} lg={5} md={6} sm={12} sx={{ zIndex: 2 }}>
          <div data-aos="fade-up">
            <img
              src="https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/male-and-female-doctors-in-white-coats-with-stetho-2022-12-16-15-24-39-utc2.png"
              alt=""
              width={"80%"}
            />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;

import React from "react";
import { Buttons, TypographyText, useScreenSize } from "../../Reuse/Reuse";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, useMediaQuery } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Content2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useScreenSize();
  return (
  
        <React.Fragment>
        <Grid
          container
          spacing={4}
          id="home"
          sx={{
            position: "relative",
            width: "100%",
            padding: "5%",
            backgroundImage: `url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/plus-1.png)`,
            backgroundPosition: "center",
            backgroundSize: "30px auto",
            position: "relative",
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
  
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              zIndex: 1,
            }}
          />
          <Grid
            item
            xs={12}
            lg={5}
            md={6}
            sm={12}
            sx={{
              zIndex: 2,
              margin: "auto",paddingLeft:0
            }}
             data-aos="fade-up" data-aos-duration="3000"
          >
             <img
                src="https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/young-female-pharmacist-posing-while-working-in-a-pharmacy-e1697689073593.jpg"
                alt="Pharmacist"
                width="100%"
                style={{ borderRadius: "10px" }}
              />
          </Grid>
     
          <Grid
            item 
            xs={12}
            lg={7}
            md={6}
            sm={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isSmallScreen ? "center" : "flex-start",
              zIndex: 2,
            
            }}
          >
            <Box
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <TypographyText
                Typography="Who We Are"
              variant={matches2 ? "h4" : "h5"}
                color="#132B2C"
            />
            <br/>
              <TypographyText
                Typography={
                  <>
                    Vell Biologics India Pvt. Ltd. is a pioneering
                    biopharmaceutical company focused on revolutionizing the
                    rare disease treatment landscape in India. Inspired by the
                    Sanskrit word "Vell," meaning the pursuit of wellness, our
                    company is dedicated to nurturing life and providing
                    accessible therapies to those suffering from rare and
                    chronic conditions.
                    <br />
                    <br />
                    With a leadership team that brings decades of experience
                    from leading global pharmaceutical companies, we combine
                    deep expertise in rare diseases with strong partnerships to
                    drive meaningful change in the healthcare ecosystem. We aim
                    to transform the treatment of rare diseases, improve patient
                    outcomes, and make a lasting impact on healthcare in India.
                  </>
                }
                fontSize=".9rem"
                color="gray"
              />
              <br />{" "}
              <Buttons
                bgcolor="#47A2A3"
                color="white"
                Buttonname="More About Us"
              />
            </Box>
          </Grid>
          </Grid>

      </React.Fragment>
  );
};

export default Content2;

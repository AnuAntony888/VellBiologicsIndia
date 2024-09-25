import React from "react";
import { Buttons, TypographyText } from "../../Reuse/Reuse";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, useMediaQuery } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Content2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ padding: "5%" }}>
      <Box
        sx={{
          backgroundImage: `url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/plus-1.png)`,
          backgroundPosition: "center",
          backgroundSize: "30px auto",
          position: "relative",
          //   padding: "5%",
        }}
      >
        {/* Overlay */}
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

        {/* Content */}
        <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
          <Grid
            item
            xs={12}
            lg={5}
            md={6}
            sm={12}
            sx={{
              display: "flex",margin:'auto',

              justifyContent: isSmallScreen ? "center" : "flex-start",
            }}
          >
            <Box data-aos="fade-up" data-aos-duration="3000">
              <img
                src="https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/young-female-pharmacist-posing-while-working-in-a-pharmacy-e1697689073593.jpg"
                alt="Pharmacist"
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </Box>
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
       variant="h4"
                  color="#132B2C"
              />
              {/* <TypographyText
                Typography="Transforming Rare Disease Treatment in India"
                fontSize="2rem"
                 color="#132B2C"
            
              /> */}
              <TypographyText
                Typography={
                  <>
           Vell Biologics India Pvt. Ltd. is a pioneering biopharmaceutical company focused on revolutionizing the rare disease treatment landscape in India. Inspired by the Sanskrit word "Vell," meaning the pursuit of wellness, our company is dedicated to nurturing life and providing accessible therapies to those suffering from rare and chronic conditions.
<br/><br/>
With a leadership team that brings decades of experience from leading global pharmaceutical companies, we combine deep expertise in rare diseases with strong partnerships to drive meaningful change in the healthcare ecosystem. We aim to transform the treatment of rare diseases, improve patient outcomes, and make a lasting impact on healthcare in India.
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
      </Box>
    </Box>
  );
};

export default Content2;

import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { TypographyText, useScreenSize } from "../../Reuse/Reuse";

const Content3 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useScreenSize();
  return (
    <div>
      <Grid
        container
        spacing={2}
        id="home"
        sx={{
          position: "relative",
width:'100%',
          paddingTop: "7%",
          pl: "7%",
          pr: "7%",
          backgroundImage:
            "url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/portrait-of-a-handsome-pharmacist-working-in-a-pharmacy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "50% 40%",
          overflow: "hidden",
          height: "100vh",
          margin:0
        }}
      >
        <Box
          sx={{
            width:'100%',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor:"rgba(19, 43, 44, 0.9)",
         
            zIndex: 1,
          }}
        />

        <Grid
          item
          xs={12}
          sx={{
            margin: "auto",

            zIndex: 2,
          }}
        >
          <Box data-aos="fade-up"
                   data-aos-anchor="#example-anchor"
                   data-aos-offset="500"
                   data-aos-duration="500">
            <TypographyText
              Typography={<>Transforming Rare Disease Treatment in India</>}
              color="white"
              textAlign="center"
              variant={matches2 ? "h4" : "h5"}
            //   fontWeight="600"
            />
            <TypographyText
              Typography={
                <>
                  At Vell Biologics India Pvt. Ltd., we bridge the healthcare
                  gap by providing life-saving therapies for chronic and rare
                  diseases, bringing hope and transformation to patients and
                  their families.
                </>
              }
              color="white"
              textAlign="center"
              fontSize=".1.3rem"

              // fontWeight="600"
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content3;

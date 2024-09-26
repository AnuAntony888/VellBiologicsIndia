import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { TypographyText } from "../../Reuse/Reuse";

const Content3 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <Grid
        container
        spacing={2}
        id="home"
        sx={{
          position: "relative",

          paddingTop: "7%",
          pl: "7%",
          pr: "7%",
          backgroundImage:
            "url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/portrait-of-a-handsome-pharmacist-working-in-a-pharmacy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "50% 40%",
          overflow: "hidden",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor:"rgba(19, 43, 44, 0.9)",
              // "rgba(47, 108, 109, 0.6)",
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
          <Box data-aos="fade-up" data-aos-duration="3000">
            <TypographyText
              Typography={<>Transforming Rare Disease Treatment in India</>}
              color="white"
              textAlign="center"
              variant="h4"
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

import { Box, Grid, } from "@mui/material";
import React from "react";
import {  TypographyText, useScreenSize } from "../Reuse/Reuse";
import img1 from "../Assets/2.png";
import img2 from "../Assets/4.jpg";
import img3 from "../Assets/3.png";
import { styles } from "./addingcontent/Style";
const Bridging = () => {
  const matches2 = useScreenSize();

  return (
    <>
     
      {/**************************************************************************/}
      <Box sx={{ ...styles.bg1 }}>
        <Box sx={{ pt: "5%", pl: "7%", pb: "5%",width:'100%' }}>
          <Box sx={{paddingRight:'7%'}}>
          <TypographyText
              Typography="Vell Bio: Transforming Access to Life-Saving Rare Disease Treatments"
              variant={matches2 ? "h4" : "h5"}
              color="white"
              textAlign="center"
          />
</Box>
     
          <br />
          <br/>
        <Grid container sx={containerStyles} data-aos="fade-right">
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img
              src={
               img1
              }
              alt=""
              width={"100%"}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <TypographyText
              Typography={"Bridging the Gap"}
              fontSize={"1.4rem"}
              textAlign="center"
              color="white"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
              <TypographyText
                Typography={
                  "At Vell Biologics, we are on a mission to bridge the gap in healthcare by improving access to life-saving treatments for serious chronic & rare diseases"
                }
                fontSize={".9rem"}
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/****************section***************8 */}
      <Box sx={{  pt: "5%", pr: "10%", pb: "5%" }}>
        <Grid container sx={containerStyles} data-aos="fade-left">
        <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
              <TypographyText
                Typography={
               `Our name Vell, derived from Sanskrit word "Vell" signifies the pursuit of wellness, it is a movement towards hope and transformation for those affected by serious chronic & rare ses.`
                }
                fontSize={".9rem"}
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>
   
          <Grid item lg={3} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <TypographyText
              Typography={"Inspiration from Vell"}
              fontSize={"1.4rem"}
              textAlign="center"
              color="white"
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img
              src={
               img2
              }
              alt=""
              width={"100%"}
            />
          </Grid>
        </Grid>
        </Box>

        {/**************section3****************8 */}
        <Box
          sx={{ pt: "5%", pl: "10%", pb: "5%" }}>
        <Grid container sx={containerStyles}  data-aos="fade-left">
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img
              src={
     img3
              }
              alt=""
              width={"100%"}
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <TypographyText
              Typography={"Nurturing Life"}
              fontSize={"1.4rem"}
              textAlign="center"
              color="white"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
              <TypographyText
                Typography={
                "Just as Vell represent life-giving power, our company embodies the commitment to nurturing and sustaining the lives of those affected by rare and often overlooked conditions"
                }
                fontSize={".9rem"}
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
        </Box>
    </>
  );
};

export default Bridging;

export const rightGridStyles = {
  bgcolor: "#132B2C",
  pt: "2%",
  pl: "1%",
  pr: "1%",
};

export const containerStyles = {
  bgcolor: "#132B2C",
};
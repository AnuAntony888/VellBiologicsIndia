import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { CardFunction, TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/9.jpg";
import img2 from "../Assets/10.png";
import img3 from "../Assets/11.png";
import img4 from "../Assets/12.png";
import { containerStyles, rightGridStyles } from "./Bridging";
import { styles } from "./addingcontent/Style";
const Roadmap = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (

    <Box sx={{ ...styles.bg1 }}>
      <Box sx={{ pt: "5%", pl: "10%", pb: "5%", width: "100%" }}>
        <TypographyText
          Typography="Vell Bio: Transforming Access to Life-Saving Rare Disease Treatments"
          variant="h4"
          color="white"
          textAlign="center"
        />
        <br />
        <br />
        <Grid container sx={containerStyles} data-aos="fade-right">
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img src={img4} alt="" width={"100%"} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <TypographyText
              Typography={"Establish Expertise"}
              fontSize={"1.4rem"}
              textAlign="center"
              color="white"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
              <TypographyText
                Typography={
                  "Establish Expertise Leveraging our deep understanding of rare diseases and strategic  partnerships to drive "
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
      <Box sx={{ pt: "5%", pr: "10%", pb: "5%" }}>
        <Grid container sx={containerStyles} data-aos="fade-left">
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
              <TypographyText
                Typography={`Introducing our groundbreaking treatments to the Indian  market and beyond, enhancing accessibility`}
                fontSize={".9rem"}
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>

          <Grid item lg={3} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <TypographyText
              Typography={"Expand Reach"}
              fontSize={"1.4rem"}
              textAlign="center"
              color="white"
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img src={img2} alt="" width={"100%"} />
          </Grid>
        </Grid>
      </Box>

      {/**************section3****************8 */}
      <Box sx={{ pt: "5%", pl: "10%", pb: "5%" }}>
        <Grid container sx={containerStyles} data-aos="fade-left">
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img src={img3} alt="" width={"100%"} />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <TypographyText
              Typography={"Empower Patients"}
              fontSize={"1.4rem"}
              textAlign="center"
              color="white"
            />
          </Grid>
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
              <TypographyText
                Typography={
                  "Providing hope and transforming the lives of rare disease patients and their families."
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
      <Box sx={{ pt: "5%", pr: "10%", pb: "5%" }}>
        <Grid container sx={containerStyles} data-aos="fade-left">
          <Grid item lg={6} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <Box sx={{ p: "5%" }}>
              <TypographyText
                Typography={`Becoming a beacon of hope and driving meaningful change in the rare disease landscape`}
                fontSize={".9rem"}
                textAlign="left"
                color="white"
              />
            </Box>
          </Grid>

          <Grid item lg={3} md={6} sm={6} xs={12} sx={rightGridStyles}>
            <TypographyText
              Typography={"Achieve Impact"}
              fontSize={"1.4rem"}
              textAlign="center"
              color="white"
            />
          </Grid>
          <Grid item lg={3} md={6} sm={6} xs={12}>
            <img src={img4} alt="" width={"100%"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Roadmap;
const Data = [
  {
    image: img1,
    txt: "Establish Expertise",
    txt1: "Establish Expertise Leveraging our deep understanding of rare diseases and strategic  partnerships to drive ",
  },
  {
    image: img2,
    txt: "Expand Reach",
    txt1: "Introducing our groundbreaking treatments to the Indian  market and beyond, enhancing accessibility",
  },
  {
    image: img3,
    txt: "Empower Patients",
    txt1: "Providing hope and transforming the lives of rare disease patients and their families.",
  },
  {
    image: img4,
    txt: "Achieve Impact",
    txt1: "Becoming a beacon of hope and driving meaningful change in the rare disease landscape",
  },
];

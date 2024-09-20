import { Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { CardFunction, TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/2.png";
import img2 from "../Assets/4.jpg";
import img3 from "../Assets/3.png";
const Bridging = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <Box id="technicalskills" sx={{ padding: "5%" }}>
      <Grid container spacing={4} sx={{ alignContent: 'center' ,justifyContent:'center'}}>
        <Grid item xs={12} md={12} lg={12}>
          <TypographyText
            Typography={"Vell Bio : Transforming the Rare Disease Landscape"}
  
            fontSize={isSmallScreen ? "1.5rem" : "2rem"}
            textAlign="center"
            color="#001270"
          />

          <TypographyText
            Typography={"Access to life-saving treatments for rare diseases"}
            fontSize={isSmallScreen ? "1.5rem" : "2rem"}
            textAlign="center"
            color="#2773C7"
          />
        </Grid>
        {Data.map((data, index) => (
          <Grid item xs={12} md={4} lg={4} sm={6}>
            <CardFunction image={data.image} txt={data.txt} txt1={data.txt1}
           height="200px"/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Bridging;
const Data = [
  {
    image: img1,
    txt: "Bridging the Gap",
    txt1: "At Vell Biologics, we are on a mission to bridge the gap in healthcare by improving access to life-saving treatments for serious chronic & rare diseases",
  },
  {
    image: img2,
    txt: "Inspiration from Vell",
    txt1: `Our name Vell, derived from Sanskrit word "Vell" signifies the pursuit of wellness, it is a movement towards hope and transformation for those affected by serious chronic & rare ses.`,
  },
  {
    image: img3,
    txt: "Nurturing Life",
    txt1: "Just as Vell represent life-giving power, our company embodies the commitment to nurturing and sustaining the lives of those affected by rare and often overlooked conditions",
  },
];

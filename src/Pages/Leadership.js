import { Box, Grid, useMediaQuery } from "@mui/material";

import React from "react";
import { CardFunction, TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/5.jpg";
import img2 from "../Assets/7.jpg";
import img3 from "../Assets/6.jpg";
import img4 from "../Assets/8.png";
const Leadership = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <Box id="services" sx={{ padding: "5%" }}>
      <Grid
        container
        spacing={4}
        sx={{ alignContent: "center", justifyContent: "center" }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <TypographyText
            Typography={"Leadership Team Behind Vell Biologics"}
            fontSize={isSmallScreen ? "1.5rem" : "2rem"}
            textAlign="center"
            color="#001270"
          />

          <TypographyText
            Typography={
              "Driving Innovation and Access in Rare Disease Treatments"
            }
            fontSize={isSmallScreen ? "1.5rem" : "2rem"}
            textAlign="center"
            color="#2773C7"
          />
        </Grid>
        {Data.map((data, index) => (
          <Grid item xs={12} md={3} lg={3} sm={6}>
            <CardFunction
              image={data.image}
              txt={data.txt}
              txt1={data.txt1}
                    height="300px"
                    backgroundRepeat='none'
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Leadership;
const Data = [
  {
    image: img1,
    txt: "Rakesh Nair",
    txt1: "The CEO of Vell Biologics has over 25 years of experience, having leadership roles at Novo Nordisk,Dr. Reddy's, and Ranbaxy. He successfully grew Novo Nordisk's Rare Disease business in India and the UAE from scratch to over $15.5M, bringing critical leadership to Vell Biologics' vision and growth.",
  },

  {
    image: img2,
    txt: "Ashok Rao Bommena",
    txt1: "Co-Promoter and Chief Business Officer of Vell Biologics, has 30+ years of pharmaceutical experience, including 18+ years in leadership roles. As a former Novo Nordisk India Board Director, he drove significant market growth. Ashok will provide critical guidance and leadership to scale Vell Bio’s operations and achieve its business goals",
    },
    {
        image: img3,
        txt:"Sridhar N",
      txt1:"Co-Promoter and Head of Access & Government Affairs at Vell Bio, brings over 20 years of pharmaceutical experience. His expertise in sales, market access, and knowledge of the Indian market, along with his track record in business growth, is crucial for VellBio's market penetration and government affairs strategs"
    },
    {
        image: img4,
        txt:"T D Ganesh",
      txt1:"Co-Promoter & Head of Marketing & Operations at Vell Bio, brings over 20+ years of experience in pharmaceutical marketing. with key roles at Novo Nordisk and Allergan. Ganesh’s expertise in strategic marketing and product launches will drive Vell Bio’s growth and strengthen its market presence."
  }
];

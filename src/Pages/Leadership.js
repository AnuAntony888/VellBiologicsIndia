import { Box, Grid, useMediaQuery } from "@mui/material";

import React from "react";
import { CardFunction, TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/5.jpg";
import img2 from "../Assets/7.jpg";
import img3 from "../Assets/6.jpg";
import img4 from "../Assets/8.png";
const Leadership = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (<>

    <Grid
    container
    spacing={2}
    id="home"
    sx={{
      position: "relative",
    p:'5%',
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
       <Grid item xs={12} md={12} lg={12} sx={{ zIndex: 2, }}>
        <Box data-aos="fade-up" data-aos-duration="3000">
          <TypographyText
            Typography="Leadership Team: Driving Innovation and Access in Rare Disease Treatments"
            variant="h4"
            color="white"
            textAlign="center"
          />
        </Box>
      </Grid>
      {Data.map((data, index) => (<>
        <Grid item xs={12} lg={3} md={3} sm={12} sx={{ zIndex: 2, }}>
      <div data-aos="fade-left">
       <img src={data.image} alt='' width={'100%'} height={'300px'}/>
      </div>
    </Grid>
    <Grid
      item
      xs={12} md={3} lg={3} sm={6} 
      sx={{
        zIndex: 2,
        margin: "auto",
      }}
    ><div data-aos="fade-left">
       <TypographyText
            Typography={
              data.txt}
          
            fontSize={ "1.5rem" }
            textAlign="center"
            color="white"
            />
                  <TypographyText
            Typography={
              data.txt1}
          
            fontSize={ ".9rem" }
            textAlign="left"
            color="white"
          />
        </div>
    </Grid>
   
     </>   ))}
  </Grid>
 </> );
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

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import React from "react";
import { CardFunction, TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/5.jpg";
import img2 from "../Assets/7.jpg";
import img3 from "../Assets/6.jpg";
import img4 from "../Assets/8.png";
import sr from "../Assets/sr.jpg";
const Leadership = () => {
  const theme = useTheme(); // Get the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
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
          paddingBottom: "5%",
          backgroundImage:
            "url(https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/shelves-with-medications-at-a-modern-pharmacy-shop.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: 0,
          "& > .MuiGrid-item": {
          paddingLeft: 0, // Remove padding-left
        },
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
          md={12}
          lg={12}
          sx={{ zIndex: 2 }}
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="100"
        >
          <TypographyText
            Typography="Leadership Team: Driving Innovation and Access in Rare Disease Treatments"
            variant={!isSmallScreen ? "h4" : "h5"}
            color="white"
            textAlign="center"
          />
        </Grid>
        <Grid item xs={12} lg={12} md={12} sm={12} sx={{
          zIndex: 2,
       
          "& > .MuiGrid-item": {
            paddingLeft: 0, // Remove padding-left
          },
         }}>
          <Grid
            container
            spacing={2}
            sx={{
              margin: 0,
              width: "100%",
              display: "flex",

              justifyContent: "center",
              // height:'100%'

            }}
          >
            {Data.map((data, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sm={6}
                key={index}
                sx={{
                  zIndex: 2,

  }}     data-aos="fade-left" 
              >
                <Card
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    display: !isSmallScreen ? "flex" : "centre",
                    borderRadius: "20px",height:'100%'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={data.image}
                    alt={data.txt}
                    sx={{
                      objectFit: !isSmallScreen ? "contain" : "contain;",
                    }}
                  />
                  <CardContent>
                    <TypographyText
                      Typography={data.txt}
                      fontSize={"1.5rem"}
                      textAlign="center"
                      color="white"
                    />
                    <TypographyText
                      Typography={data.txt1}
                      fontSize={".9rem"}
                      textAlign="left"
                      color="white"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={12} lg={12} sm={12}>
          <Grid
            container
            spacing={2}
            sx={{
              margin: 0,

              display: "flex",

              justifyContent: "center",
            }}
          >
            {Data.map((data, index) => (
              <React.Fragment>
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={6}
                  sm={6}
                  key={index}
                  sx={{ zIndex: 2, padding: "10px" }}
                >
                  <Card
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      display: !isSmallScreen ? "flex" : "centre",
                      borderRadius: "20px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={data.image}
                      alt={data.txt}
                      sx={{
                        objectFit: !isSmallScreen ? "contain" : "contain;",
                      }}
                    />
                    <CardContent>
                      <TypographyText
                        Typography={data.txt}
                        fontSize={"1.5rem"}
                        textAlign="center"
                        color="white"
                      />
                      <TypographyText
                        Typography={data.txt1}
                        fontSize={".9rem"}
                        textAlign="left"
                        color="white"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </React.Fragment>
            ))}
          </Grid> 
        </Grid>*/}
      </Grid>
    </React.Fragment>
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
    txt: "Sridhar N",
    txt1: "Co-Promoter and Head of Access & Government Affairs at Vell Bio, brings over 20 years of pharmaceutical experience. His expertise in sales, market access, and knowledge of the Indian market, along with his track record in business growth, is crucial for VellBio's market penetration and government affairs strategs",
  },
  {
    image: sr,
    txt: "Sagar Singhal",
    txt1: "Head of Medical, Clinical, PV and Regulatory with 20+ years in medical affairs. Led key launches (Tresiba®, NovoMix®50, Xultophy®, Ryzodeg) in India and the UAE, built KOL networks, ensured compliance, and received multiple awards for excellence in medical affairs will drive the medical , clinical regulatory function",
  },
  {
    image: img4,
    txt: "T D Ganesh",
    txt1: "Co-Promoter & Head of Marketing & Operations at Vell Bio, brings over 20+ years of experience in pharmaceutical marketing. with key roles at Novo Nordisk and Allergan. Ganesh’s expertise in strategic marketing and product launches will drive Vell Bio’s growth and strengthen its market presence.",
  },
];

import { Box, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import { CardFunction, TypographyText } from '../Reuse/Reuse'
import img1 from "../Assets/9.jpg";
import img2 from "../Assets/10.png";
import img3 from "../Assets/11.png";
import img4 from "../Assets/12.png";
const Roadmap = () => {
    const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <Box id="Roadmap" sx={{ padding: "5%" }}>
    <Grid
      container
      spacing={4}
      sx={{ alignContent: "center", justifyContent: "center" }}
    >
      <Grid item xs={12} md={12} lg={12}>
        <TypographyText
                      Typography={"Our Roadmap for Success"}
          fontSize={isSmallScreen ? "1.5rem" : "2rem"}
          textAlign="center"
          color="#001270"
        />

        <TypographyText
          Typography={
            "Transforming the lives of rare disease patients"
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
                  height="250px"
                  backgroundRepeat='none'
          />
        </Grid>
      ))}
    </Grid>
  </Box>
  )
}

export default Roadmap
const Data = [{
    image: img1,
    txt: "Establish Expertise",
    txt1: "Establish Expertise Leveraging our deep understanding of rare diseases and strategic  partnerships to drive "

},
    { image: img2,
        txt: "Expand Reach",
        txt1:"Introducing our groundbreaking treatments to the Indian  market and beyond, enhancing accessibility"
    
    },
    {
        image: img3,
        txt: "Empower Patients",
        txt1:"Providing hope and transforming the lives of rare disease patients and their families."
    },
    {
        image: img4,
        txt: "Achieve Impact",
        txt1: "Becoming a beacon of hope and driving meaningful change in the rare disease landscape"
}]

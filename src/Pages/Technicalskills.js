import {
  Box,
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { CardFunction, TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/1.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Technicalskills = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");

  return (







   <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12}>
     
             <Box data-aos="fade-up" data-aos-duration="3000">
              <TypographyText
                Typography="India's Rare Disease Market: Opportunities and Growth Potential"
                variant="h4"
              color="#132B2C"
              textAlign="center"
              />
            </Box>
      </Grid>
      {data.map((item,index)=>(
      <Grid item xs={12} md={6} lg={3} sm={6}>
          <CardFunction
          txt={data.txt} txt1={data.txt1}/>
        </Grid>))}
      </Grid>
    









    // <Box
    //   id="aboutme"
    //   sx={{
    //     padding: "5%",
    //     backgroundImage: `url(${img1})`, // Note the backticks for template literal
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat", // To avoid repeating the image
    //     backgroundPosition: "center", // Align the image in the center
    //   }}
    // >
    //   <Grid container spacing={2}>
    //     <Grid item xs={12} md={8} lg={8}>
    //       <TypographyText
    //         Typography={"India's Rare Disease Market"}
    //         fontSize={isSmallScreen ? "1.5rem" : "2rem"}
    //         textAlign={isSmallScreen ? "center" : "left"}
    //         color="#001270"
    //       />
    //       <TypographyText
    //         Typography={"Opportunities and Growth Potential"}
    //         fontSize={isSmallScreen ? "1.5rem" : "2rem"}
    //         textAlign={isSmallScreen ? "center" : "left"}
    //         color="#2773C7"
    //       />
    //       {data.map((section, index) => (
    //         <Box key={index} mt={4}>
    //           <TypographyText
    //             Typography={section.title}
    //             fontSize="1.rem"
    //             color="#001270"
    //             fontWeight="700"
    //           />
    //           <Grid container spacing={2}>
    //             {section.content.map((item, i) => (
    //               <Grid item xs={12} key={i}>
    //                 <Typography variant="body1" sx={{ fontSize: ".9rem" }}>
    //                   <strong>{item.label}:</strong> {item.text}
    //                 </Typography>
    //               </Grid>
    //             ))}
    //           </Grid>
    //         </Box>
    //       ))}
    //     </Grid>
    //   </Grid>
    // </Box>

  );
};

export default Technicalskills;


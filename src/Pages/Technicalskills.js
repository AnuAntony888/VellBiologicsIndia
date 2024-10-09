import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Buttons, CardFunction, TypographyText } from "../Reuse/Reuse";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useMediaQuery from "@mui/material/useMediaQuery";

const Technicalskills = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");

  return (
    <Grid container spacing={2} sx={{ p: "5%" }}>
      <Grid item xs={12} md={12} lg={12}>
        <Box data-aos="fade-up"          data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500">
          <TypographyText
            Typography="India's Rare Disease Market: Opportunities and Growth Potential"
            variant="h4"
            color="#132B2C"
            textAlign="center"
          />
        </Box>
      </Grid>

      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card sx={{height:'100%',backgroundColor:'#3C8889',textAlign:'center'}}>
            <CardContent>
              
                     <TypographyText
                     Typography={card.title}
          fontSize='1.3rem'
         
                textAlign="center"
                color ='white'
              />    
              <br />
              <ul>
                {card.content.map((text, i) => (
               
                <TypographyText Typography={text}
                  fontSize='.9rem'
                  color='white'
                        textAlign="left"
                />
      
              //   <List sx={{ p: "0" }}>
              //   <ListItem alignItems="flex-start">
              //     <ArrowRightIcon sx={{ color: "#C49B44" }} />
              //     <ListItemText>
              //     <TypographyText Typography={text}
              //     fontSize='.9rem'
              //     color='white'
              //           textAlign="left"
              //   />
              //     </ListItemText>
              //   </ListItem>
              // </List>
              ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>

   
  );
};

export default Technicalskills;

const data = [{ txt: "", txt1: "" }];
const cardData = [
  {
    title: "Market Overview",
    content: ["Prevalence: Over 70 million rare disease patients in India.",
    
"Key Diseases: Focus on genetic disorders, rare cancers, and orphan diseases.  ",
"Market Size: Estimated at $300 million, with a CAGR of 10-12%."
      
    ],
  },
  {
    title: "Regulatory Environment",
    content: [
      "Framework: National Policy for Rare Diseases (NPRD).",
      "Initiatives: Government subsidies and treatment funding.",
    ],
  },
  {
    title: "Challenges",
    content: [
      "Awareness: Low awareness, delayed diagnoses.",
      "Treatment: High cost, limited availability.",
      "Infrastructure: Need for better healthcare support.",
    ],
  },
  {
    title: "Opportunities",
    content: [
      "Needs: Affordable treatments, better diagnostics, patient services.",
      "Partnerships: NGOs, government, healthcare providers.",
    ],
  },
];

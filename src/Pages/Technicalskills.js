import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { TypographyText } from "../Reuse/Reuse";
import img1 from "../Assets/1.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Technicalskills = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");

  return (
    <Box
      id="aboutme"
      sx={{
        padding: "5%",
        backgroundImage: `url(${img1})`, // Note the backticks for template literal
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat", // To avoid repeating the image
        backgroundPosition: "center", // Align the image in the center
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <TypographyText
            Typography={"India's Rare Disease Market"}
            fontSize={isSmallScreen ? "1.5rem" : "2rem"}
            textAlign={isSmallScreen ? "center" : "left"}
            color="#001270"
          />
          <TypographyText
            Typography={"Opportunities and Growth Potential"}
            fontSize={isSmallScreen ? "1.5rem" : "2rem"}
            textAlign={isSmallScreen ? "center" : "left"}
            color="#2773C7"
          />
          {data.map((section, index) => (
            <Box key={index} mt={4}>
              <TypographyText
                Typography={section.title}
                fontSize="1.rem"
                color="#001270"
                fontWeight="700"
              />
              <Grid container spacing={2}>
                {section.content.map((item, i) => (
                  <Grid item xs={12} key={i}>
                    <Typography variant="body1" sx={{ fontSize: ".9rem" }}>
                      <strong>{item.label}:</strong> {item.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Technicalskills;
const data = [
  {
    title: "Market Overview",
    content: [
      {
        label: "Prevalence",
        text: "India has over 70 million rare disease patients.",
      },
      {
        label: "Key Diseases",
        text: "Focus areas include genetic disorders, rare cancers, and orphan diseases.",
      },
      {
        label: "Current Market Size",
        text: "Estimated at $300 million, with a CAGR of 10-12%.",
      },
    ],
  },
  {
    title: "Regulatory Environment",
    content: [
      {
        label: "Current Framework",
        text: "Governed by the National Policy for Rare Diseases (NPRD).",
      },
      {
        label: "Recent Initiatives",
        text: "Government subsidies and funding for rare disease treatment.",
      },
    ],
  },
  {
    title: "Challenges",
    content: [
      {
        label: "Awareness & Diagnosis",
        text: "Low awareness and delayed diagnoses.",
      },
      {
        label: "Access to Treatment",
        text: "High cost and limited availability of therapies.",
      },
      {
        label: "Infrastructure",
        text: "Need for better healthcare infrastructure and patient support systems.",
      },
    ],
  },
  {
    title: "Opportunities",
    content: [
      {
        label: "Unmet Needs",
        text: "Affordable treatments, better diagnostics, patient support services.",
      },
      {
        label: "Potential Partnerships",
        text: "Collaboration with NGOs, government bodies, and healthcare providers.",
      },
    ],
  },
];

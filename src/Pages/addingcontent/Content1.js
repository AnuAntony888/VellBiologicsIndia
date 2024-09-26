import React from "react";
import { Contentdata, TypographyText } from "../../Reuse/Reuse";
import { useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const Content1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>

      <Grid container spacing={2} sx={{ padding: "3%",bgcolor:'#F6F6F6'}}>
        {Data.map((data, index) => (
          <>
            <Grid item xs={11} md={5.5} lg={2.5} sm={5.5}>
              <TypographyText
                Typography={data.txt}
                fontSize= "1.3rem"
                // textAlign="center"
                color="#2F6C6D"
              />
              <TypographyText
                Typography={data.txt1}
                fontSize="1rem"
                color="gray"
              />
            </Grid>
            <Grid
              item
              xs={1}
              md={0.5}
              lg={0.5}
              sm={0.5}
              sx={{ margin: "auto" }}
            >
              <ArrowRightIcon
                sx={{ fontSize: "2rem", color: "#2F6C6D", margin: "auto" }}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
};

export default Content1;
const Data = [
    {
      txt: "Market Overview",
      txt1: "India has 70 million rare disease patients, with a market size of $300 million and a growth rate of 10-12%.",
    },
    {
      txt: "Regulatory Environment",
      txt1: "The National Policy for Rare Diseases (NPRD) supports funding and subsidies for treatment access.",
    },
    {
      txt: "Challenges",
      txt1: "Low awareness and delayed diagnoses limit treatment access amid high costs and poor infrastructure.",
    },
    {
      txt: "Opportunities",
      txt1: "There's a need for affordable treatments and diagnostics, creating partnership opportunities with NGOs and government.",
    },
  ];
  

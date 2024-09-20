import React from "react";
import BackgroundWithText from "../Reuse/Reuse";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <Box id="home">
      <BackgroundWithText
        backgroundImage={
          "https://www.ibef.org/uploads/industry/1638360318_Pharmaceuticals.jpg"
        }
        Typography={"Vell Biologics India Pvt. Ltd."}
        fontWeigh="700"
        //  variant={!isSmallScreen ? "h4" : "h5"}
         fontSize={isSmallScreen ? "1.9rem" : "2.5rem"}
        color="white"
        textAlign="center"
      />
    </Box>
  );
};

export default About;

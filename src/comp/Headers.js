import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ResponsiveHeader from "./ResponsiveHeader";
import { Buttons, TypographyText } from "../Reuse/Reuse";

const Headers = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");

  function refreshPage() {
    window.location.href = "/";
  }

  const [navactive, setNavactive] = useState("#");

  // Smooth scroll function for internal navigation
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "white",

          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {matches ? (
            <>
              <TypographyText
                Typography={"Vell Biologics India Pvt. Ltd."}
                color="#198BDE"
                fontSize="1.5rem"
                fontWeight="600"
              />
              <Box>
                {/* {navItems.map((item, index) => (
                  <Button key={index} sx={{ textTransform: "capitalize" }}>
                    {item}
                  </Button>
                ))} */}
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    sx={{ textTransform: "capitalize" }}
                    onClick={() => handleScrollToSection(item.sectionId)}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <>
              <TypographyText
                Typography={"Vell Biologics India Pvt. Ltd."}
                color="#198BDE"
                fontSize="1.5rem"
                fontWeight="600"
              />
              <ResponsiveHeader />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Headers;

export const navItems = [
  { label: "Home", sectionId: "home" },
  { label: "Opportunities", sectionId: "aboutme" },
  { label: "Transformation", sectionId: "technicalskills" },
  { label: "Leadership", sectionId: "services" },
  { label: "Roadmap", sectionId: "Roadmap" },
  // { label: "Testimonials", sectionId: "testimonials" },
   { label: "Contact", sectionId: "contactme" },
];

import { Box, Grid } from "@mui/material";
import React from "react";
import { TypographyText } from "../../Reuse/Reuse";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const Contant4 = () => {
  return (
    <div>
      <Box id="services" sx={{ pl: "5%", pr: "5%", pt: "5%", pb: "3%" }}>
        <Grid
          container
          spacing={4}
          sx={{ alignContent: "center", justifyContent: "center" }}
        >
          {" "}
          <Grid item xs={12} md={7} lg={7} sm={12}>
            <TypographyText
              Typography="What We Offer"
              variant="h4"
              color="#132B2C"
              textAlign="center"
            />
            <Box data-aos="fade-up" data-aos-duration="3000">
              <TypographyText
                Typography="At Vell Biologics India Pvt. Ltd., we provide innovative solutions for patients with rare and chronic diseases, including:"
                fontSize="1rem"
                color="gray"
                textAlign="left"
              />
            </Box>
            <br />

            <Grid container spacing={2}>
              {Data.map((data, index) => (
                       < >
                  <Grid item xs={1} sx={{ margin: "auto" }}>
                  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <CheckIcon
                      sx={{
                        backgroundColor: "#47A2A3",
                        fontSize: "2.3rem",
                        color: "white", // Set the icon color to white
                        borderRadius: "5px",
                      }}
                      />
                      </div>
                  </Grid>
                  <Grid item xs={0.5}></Grid>
                  <Grid item xs={10.5}>
                  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <TypographyText
                      Typography={data.txt}
                      fontSize="1.3rem"
                      // textAlign="center"
                      color="#2F6C6D"
                    />
                    <TypographyText
                      Typography={data.name}
                      fontSize="1rem"
                      color="gray"
                      />
      </div>
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            lg={5}
            sm={12}
            sx={{
              display: "flex", // Use flexbox for alignment
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              margin: "auto",
            }}
          ><Box data-aos="fade-left"
              sx={{
                display: "flex", // Use flexbox for alignment
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                margin: "auto",
          }}>
            <img
              src="https://tebewebe.online/pharamedic/wp-content/uploads/sites/40/2023/10/a-pharmacy-expert-is-standing-in-the-drug-store-and-smiling-at-the-camera--1363x2048.jpg"
              alt=""
              width={"80%"}
              height={"80%"}
              style={{borderRadius:'20px'}}
              />
              </Box>
          </Grid>
        </Grid>
      </Box>

      
    </div>
  );
};

export default Contant4;
const Data = [
  {
    txt: "Life-Saving Therapies",
    name: "Advanced biopharmaceuticals for effective treatment.",
  },
  {
    txt: "Patient Support Services",
    name: "Comprehensive assistance to help patients navigate healthcare.",
  },
  {
    txt: "Collaborative Partnerships",
    name: "Collaborations with healthcare providers and NGOs to enhance treatment access.",
  },
  {
    txt: "Research and Development",
    name: "Focused on pioneering new therapies and improving existing ones.",
  },
  {
    txt: "Awareness Initiatives",
    name: "Programs to raise awareness and improve diagnosis of rare diseases.",
  },
];

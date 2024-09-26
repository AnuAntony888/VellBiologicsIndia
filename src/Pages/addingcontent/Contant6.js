import { Box, Grid } from "@mui/material";
import React from "react";
import { TypographyText } from "../../Reuse/Reuse";
import CheckIcon from "@mui/icons-material/Check";

const Contant6 = () => {
  return (
    <div>
      <Box id="services" sx={{ pl: "5%", pr: "5%", pt: "5%", pb: "3%" }}>
        <Grid
          container
          spacing={4}
          sx={{ alignContent: "center", justifyContent: "center" }}
        >
          {" "}
         
                  <Grid item xs={12} md={6} lg={6} sm={12} sx={{margin:'auto'}}>
                  <Box data-aos="fade-left"
              sx={{
                display: "flex", // Use flexbox for alignment
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                margin: "auto",
          }}>
            <img
              src="https://img.freepik.com/free-photo/portrait-woman-working-pharmaceutical-industry_23-2151684815.jpg?t=st=1727360321~exp=1727363921~hmac=2bb1517ba647f2ea043c4db8dbc6576c5f62fc2fcfe04933963e9e1506876dcb&w=826"
              alt=""
              width={"80%"}
              height={"80%"}
              style={{borderRadius:'20px'}}
              />
              </Box>
                      </Grid>
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <TypographyText
              Typography="Patient Support Programs"
              variant="h4"
              color="#132B2C"
              textAlign="center"
            />
            <Box data-aos="fade-up" data-aos-duration="3000">
              <TypographyText
                Typography="At the heart of Vell Biologics is our commitment to patient care. Our patient support programs provide essential services to patients and their families, including:"
                fontSize="1rem"
                color="gray"
                textAlign="left"
              />
            </Box>
            <br />

            <Grid container spacing={2}>
              {Data1.map((data, index) => (
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
        </Grid>
      </Box>

      
    </div>
  );
};

export default Contant6;
const Data = [
  {
    txt: "Government Bodies",
    name: "To align with policies and provide subsidized treatments.",
  },
  {
    txt: "NGOs",
    name: "To reach underserved communities and raise awareness.",
  },
  {
    txt: "Healthcare Providers:",
    name: "To ensure that patients receive timely and appropriate care.",
  },
  {
    txt: "Research and Development",
    name: "Focused on pioneering new therapies and improving existing ones.",
  },
  
];
const Data1 = [
    {
      txt: "Access to Treatments:",
      name: "Ensuring patients can obtain life-saving therapies, regardless of their financial situation.",
    },
    {
        txt: 'Support Networks',
        name:'Offering emotional and psychological support through patient groups and advocacy organizations.'
    
    }, {
        txt: 'Financial Assistance',
    name:'Providing financial aid and assistance to help with the cost of treatment and care.'
}]

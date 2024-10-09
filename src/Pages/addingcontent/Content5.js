import { Box, Grid } from "@mui/material";
import React from "react";
import { TypographyText, useScreenSize } from "../../Reuse/Reuse";
import CheckIcon from "@mui/icons-material/Check";

const Contant5 = () => {
  const matches2 = useScreenSize();
  return (
    <div>
      <Box id="services" sx={{ pl: "5%", pr: "5%", pt: "5%", pb: "50px" }}>
        <Grid
          container
          spacing={4}
          sx={{ alignContent: "center", justifyContent: "center" }}
        >
          {" "}
          <Grid item xs={12} md={6} lg={6} sm={12}>
            <TypographyText
              Typography="Partnerships and Collaborations"
              variant={matches2 ? "h4" : "h5"}
              color="#132B2C"
              textAlign="center"
            />
            <Box data-aos="fade-up"
                     data-aos-anchor="#example-anchor"
                     data-aos-offset="500"
                     data-aos-duration="500">
              <TypographyText
                Typography="At Vell Biologics, we believe that collaboration is the key to driving innovation and improving access to treatments for rare diseases. We actively partner with:"
                fontSize="1rem"
                color="gray"
                textAlign="left"
              />
            </Box>
            <br />

            <Grid container spacing={2}>
              {Data.map((data, index) => (
 <React.Fragment key={index}>
               <Grid
                    item
                    lg={1}
                    md={1}
                    sm={2}
                    xs={2}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                  <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <CheckIcon
                      sx={{
                        backgroundColor: "#47A2A3",
                        fontSize: "2rem",
                        color: "white", // Set the icon color to white
                        borderRadius: "5px",
                      }}
                      />
                      </div>
                  </Grid>
     
                  <Grid item lg={10.5} md={10.5} sm={9.5} xs={9.5}>
                  <div data-aos="fade-right"
 
         data-aos-offset="500"
         data-aos-duration="100"
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
                  </React.Fragment>
              ))}
            </Grid>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} sm={12} sx={{margin:'auto'}}>
            <Box data-aos="fade-left"
                       data-aos-anchor="#example-anchor"
                       data-aos-offset="500"
                       data-aos-duration="100"
              sx={{
                display: "flex", // Use flexbox for alignment
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
                margin: "auto",
          }}>
            <img
              src="https://media.istockphoto.com/id/493302504/photo/testing-substances.jpg?s=612x612&w=0&k=20&c=zxRr8On95eALl__Ff06rasZZt6oOud8gGH0_8GFRTH8="
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

export default Contant5;
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

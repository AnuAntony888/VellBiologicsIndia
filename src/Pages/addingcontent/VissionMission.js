import React from 'react'
import { AboutText5, CardHeaderavtarHeading, TypographyText,  } from '../../Reuse/Reuse';
import { Box, Grid, useTheme } from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";


const VissionMission = () => {
  const theme = useTheme();

 const matches2 = useMediaQuery(theme.breakpoints.up("sm"));
  let heading;
  return (
      <div>
       

      {/***************************************8 */}
      <Box sx={containerStyles4}>
        <Grid container spacing={4} >
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} lg={6} md={6} sm={6}>
                {/* Content for the first grid item */}
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
     
              <div data-aos="zoom-in">
                <img src={'https://img.freepik.com/premium-photo/three-pharmacists-working-pharmacy-checking-inventory-examining-medical-records_1361985-1148.jpg'} alt="" width="100%" />
              </div>
              </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
              <div data-aos="zoom-in">
                <img src={'https://img.freepik.com/free-photo/portrait-woman-working-pharmaceutical-industry_23-2151684905.jpg?t=st=1727341771~exp=1727345371~hmac=5db5bc7cd32092501dc2bdefd36a29050396e6a55fae4a1a1c343f46cc990386'} alt="" width="100%" />
           </div>   </Grid>
              <Grid item xs={12} lg={6} md={6} sm={6}>
          
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sm={12} sx={{ margin: 'auto' }}>
          <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
          <TypographyText
              Typography={<>Empowering Access to Rare
                <span style={{color:'#C49B44'}}>Treatments</span>
              </>}
              variant={matches2 ? "h4" : "h5"}
         
                textAlign="left"
                color ='white'
            />  
            <TypographyText
              Typography={<>
              </>}
                variant={matches2 ? "h4" : "h5"
                
              }
          textAlign="left"
                color ='white'
                     /> 
        </div>
          </Grid>
        </Grid>
      </Box>

      {/***************************mission and vission*******************88 */}
      <Box >
        <Grid container spacing={2} sx={{pl:'5%',pr:'5%',pt:'2%',pb:'2%'}}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
    
                <div data-aos="zoom-in-down" data-aos-duration="3000">
       
   </div>
          </Grid>
          {AboutText5.map((data, index) => (
            <Grid item lg={6} md={6} sm={12} xs={12} >
              <CardHeaderavtarHeading
                avatar={data.avatar}
                Typography={data.Typography}
                colorhead="black"
                colorcontent="black"
                Typography1={data.Typography1}
                // varianthead={matches ? "h4" : "h4"}
                fontSize={"1rem"}
                width={data.width}
                bgcolorcard="transparent"
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default VissionMission
export const Text6 = [
  {
    Typography: (
      <>
        Let's build
        <br />
        business,
      </>
    ),
    component: "div",

    color: "white",
    fontWeight: "bolder",
    textAlign: "left",
  },
];
export const Text7 = [
  {
    Typography: "together.",
    component: "div",

    textAlign: "left",
  },
];
const containerStyles4 = {
  pt: "5%",
  pl: "10%",
  pr: "10%",
  pb: "5%",
  margin:'0',
  bgcolor: "#132B2C",
};
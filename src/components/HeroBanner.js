import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#8a2be2" fontWeight="600" fontSize="25px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="500"
        fontFamily="Verdana"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile, <br /> Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={5}>
        Check out the most effective exercises
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        href="#exercises"
        sx={{ backgroundColor: "8a2be2", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#8a2be2"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
        mt={10}
      >
        Exercises
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;

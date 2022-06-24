import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

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
      <Typography color="#4169e1" fontWeight="600" fontSize="25px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile, <br /> Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained">Explore Exercises</Button>
    </Box>
  );
};

export default HeroBanner;

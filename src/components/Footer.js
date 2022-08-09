import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFFAFB">
      <Stack gap="20px" alignItems="center">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h7" pb="40px" mt="20px">
          Built by James Serra
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

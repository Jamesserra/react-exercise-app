import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScollBar from "./HorizontalScollBar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ nt: { lg: "90px", xs: "0" }, m: "10px" }}>
      <Typography variant="h4" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ m: "10px", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScollBar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h4" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ m: "10px", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScollBar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;

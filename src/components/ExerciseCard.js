import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link
      className="exercise-card"
      to={`/react-exercise-app/exercise/${exercise.id}`}
    >
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "white",
            background: "#8a2be2",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
            opacity: ".7",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "white",
            background: "#fcc707",
            fontSize: "14px",
            borderRadius: "10px",
            textTransform: "capitalize",
            opacity: ".8",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="black"
        fontWeight="500"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="20px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;

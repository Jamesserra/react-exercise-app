import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      console.log(exercisesData);
    }
  };

  return (
    <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
      <Typography
        fontWeight={300}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        The Best Workout Experience
      </Typography>
      <Box position="relative" mb="72px" className="input-box">
        <TextField
          className="input-field"
          sx={{
            input: {
              fontWeight: "400",
              borderRadius: "5px",
              borderColor: "red",
            },
            width: { lg: "800px", sm: "350px" },
            borderRadius: "45px",
            borderColor: "red",
          }}
          type="text"
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search for Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#8a2be2",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;

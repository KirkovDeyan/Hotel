import { Button, Grid, Box, Typography } from "@mui/material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import Data from "./Data";
import CountrySelect from "./CountrySelext";

const Cards = () => {
  const [current, setCurrent] = useState(0);
  const length = 3;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <Box>
        <Button onClick={prevSlide}>Left</Button>
        <Button onClick={nextSlide}>Right</Button>
      </Box>

      {Data.map(
        (slide, index) =>
          index === current && (
            <Box
              key={index}
              sx={{
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box component="img" src={slide.image} />
            </Box>
          )
      )}
      <Grid
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} sm={4}>
          <CountrySelect>Country</CountrySelect>
        </Grid>
        <Grid item xs={12} md={6} sm={4}>
          <DatePicker>Check In</DatePicker>
        </Grid>
        <Grid item xs={12} md={6} sm={4}>
          <DatePicker>Check Out</DatePicker>
        </Grid>
        <Grid item xs={12} md={6} sm={4}>
          <Typography>Adult(s)(18+)</Typography>
        </Grid>
        <Grid item xs={12} md={6} sm={4}>
          <Typography>Children(0- 17)</Typography>
        </Grid>
        <Grid item xs={12} md={6} sm={4}>
          <Button>Search</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Cards;

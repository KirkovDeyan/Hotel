import {
  Button,
  Grid,
  Box,
  Typography,
  Container,
  styled,
} from "@mui/material";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useState } from "react";
import Data from "./Data";
import CountrySelect from "./CountrySelext";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const Cards = () => {
  const [current, setCurrent] = useState(0);
  const length = 3;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const Wrapper = styled(Box)(() => ({
    width: " 100%",
    margin: "10px",
  }));

  const Arrow = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    right: "10%",
  }));

  const SecontArrow = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "10%",
  }));

  const Register = styled(Box)(() => ({
    backgroundColor: "black",
    opacity: "0.5",
    position: "absolute",
    top: "30%",
    left: "15%",
  }));

  return (
    <>
      <Wrapper>
        <SecontArrow>
          <Button sx={{ fontSize: "50px" }} onClick={prevSlide}>
            <BsFillArrowLeftCircleFill />
          </Button>
        </SecontArrow>
        <Arrow>
          <Button sx={{ fontSize: "50px" }} onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </Button>
        </Arrow>

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
        <Register>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid
              container
              spacing={2}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} md={6} lg={4}>
                <CountrySelect>Country</CountrySelect>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker label="Date From" />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker label="Date To" />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <Button>Search</Button>
              </Grid>
            </Grid>
          </Container>
        </Register>
      </Wrapper>
    </>
  );
};

export default Cards;

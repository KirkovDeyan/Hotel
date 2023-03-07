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
import DatePicker from "react-datepicker";
import Data from "./Data";
import CountrySelect from "./CountrySelext";
import { margin } from "@mui/system";

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
    // textAlign: "left",
    width: " 100%",
    margin: "10px",
  }));

  const Arrow = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    right: "20%",
  }));

  const Arrow2 = styled(Box)(() => ({
    position: "absolute",
    top: "50%",
    left: "20%",
    height: "20px",
    width: "20px",
  }));

  return (
    <>
      <Wrapper>
        <Arrow2>
          <Button onClick={prevSlide}>
            <BsFillArrowLeftCircleFill />
          </Button>
        </Arrow2>
        <Arrow>
          <Button onClick={nextSlide}>
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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid
            container
            spacing={2}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="colum"
          >
            <Grid item xs={12} md={6} lg={4}>
              <CountrySelect>Country</CountrySelect>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DatePicker>Check In</DatePicker>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <DatePicker>Check Out</DatePicker>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
            <Typography>Adult(s)(18+)</Typography>
          </Grid> */}
            {/* <Grid item xs={12} md={6} lg={4}>
            <Typography>Children(0- 17)</Typography>
          </Grid> */}
            <Grid item xs={12} md={6} lg={4}>
              <Button>Search</Button>
            </Grid>
          </Grid>
        </Container>
      </Wrapper>
    </>
  );
};

export default Cards;

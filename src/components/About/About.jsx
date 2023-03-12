import React from "react";
import AboutCard from "./AboutCard";
import {
  Button,
  Grid,
  Box,
  Typography,
  Container,
  styled,
} from "@mui/material";

const About = () => {
  return (
    <>
      <Box className="container">
        <AboutCard />
      </Box>

      <Box className="container aboutCard flex_space">
        <Box className="row row1">
          <Typography variant="h1">Our Features</Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet
            consectetur piscing elit amet consectetur adipiscing elit sed et
            eletum nulla eu placerat felis etiam tincidunt orci lacus id varius
            dolor fermum sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet
            consectetur piscing elit amet consectetur adipiscing elit sed et
            eletum nulla eu placerat felis etiam tincidunt orci lacus id varius
            dolor fermum sit amet.
          </p>
          <Button className="secondary-btn">Explore More</Button>
        </Box>
        <Box className="row image">
          <img src="/images/feature-img-1.jpg" alt="" />
          <Box className="control-btn">
            <Button className="prev"></Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;

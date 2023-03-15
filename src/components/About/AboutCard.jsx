import React from "react";
import Box, { Button, Typography } from "@mui/material";

const AboutCard = () => {
  return (
    <>
      <Box className="aboutCard mtop">
        <Box className="row row1">
          <Typography>About Us</Typography>
          <Typography>We provide Solution to grow your business</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet
            consectetur piscing elit amet consectetur adipiscing elit sed et
            eletum nulla eu placerat felis etiam tincidunt orci lacus id varius
            dolor fermum sit amet.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipiscing elit amet
            consectetur piscing elit amet consectetur adipiscing elit sed et
            eletum nulla eu placerat felis etiam tincidunt orci lacus id varius
            dolor fermum sit amet.
          </Typography>
          <Button className="secondary-btn">Explore More</Button>
        </Box>
        <Box className="row image">
          <Box component="img" src="/images/about-img-1.jpg" alt="" />
          <Box className="control-btn">
            <Button className="prev"></Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AboutCard;

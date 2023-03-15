import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Sdata from "./Sdata";

const Cards = ({
  item: { id, image, title, sidepara, desc, paraImage_one, paraImage_two },
}) => {
  return (
    <>
      <Box className="items">
        <Box className="img">
          <Box component="img" src={image} />

          <Link to={`/singlepage/${id}`} className="blogItem-link">
            <i className="fas fa-external-link-alt"></i>
          </Link>
        </Box>
        <Box className="title">
          <Typography>{title} </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Cards;

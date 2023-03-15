import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const GaleryCards = (props) => {
  const [popup, setPopup] = useState(false);

  const toggleModal = () => {
    setPopup(!popup);
  };
  return (
    <>
      <Box className="items">
        <Box className="img">
          <Box component="img" src={props.imgaes} />
          <i className="fas fa-image" onClick={toggleModal}></i>
        </Box>
        <Box className="title">
          <Typography variant="h3">{props.title} </Typography>
        </Box>
      </Box>

      {popup && (
        <Box className="popup">
          <Box className="hide"></Box>
          <Box className="popup-content">
            <Button onClick={toggleModal}>Close</Button>
            <Box component="img" src={props.imgaes} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default GaleryCards;

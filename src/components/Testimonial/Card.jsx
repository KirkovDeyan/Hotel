import React from "react";
import { Box } from "@mui/system";

const Card = (props) => {
  return (
    <>
      <Box className="box">
        <i className="fa fa-quote-left"></i>
        <Box className="para">
          <p>{props.desc}</p>
        </Box>
        <hr />
        <Box className="details flex ">
          <Box className="img">
            <img src={props.profile} alt="" />
          </Box>
          <Box className="name">
            <h3>{props.name}</h3>
            <span>{props.post}</span>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Card;

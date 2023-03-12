import React from "react";
import Card from "./Card";
import Tdata from "./Tdata";
import { Box, styled } from "@mui/system";

const StyledBox = styled(Box)(() => ({
  display: "flex",
}));

const AllItem = () => {
  return (
    <>
      <StyledBox className="container grid1">
        {Tdata.map((value, index) => {
          return <Card key={index} {...value} />;
        })}
      </StyledBox>
    </>
  );
};

export default AllItem;

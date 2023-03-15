import { Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import React, { useState } from "react";
import Dcards from "./Dcards";
import Sdata from "./Sdata";

const StyledBox = styled(Box)(() => ({
  position: "absolute",
  display: "flex",
  margin: "10px",
  width: "100%",
}));

const Destination = () => {
  const [items, setIems] = useState(Sdata);
  return (
    <>
      <StyledBox className="container">
        <Grid
          container
          spacing={3}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          justifyContent="center"
          alignItems="row"
        >
          {items.map((item) => {
            return <Dcards key={item.id} item={item} />;
          })}
        </Grid>
      </StyledBox>
    </>
  );
};

export default Destination;

import React, { useState } from "react";
import BlogData from "./BlogData";
import BlogCard from "./BlogCard";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const AllBlog = () => {
  const [items, setIems] = useState(BlogData);
  return (
    <>
      <Box className="container">
        <Box className="content grid">
          <Grid
            container
            spacing={2}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {items.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AllBlog;

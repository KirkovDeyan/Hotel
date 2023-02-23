import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box, styled, Typography } from "@mui/material";

const Container = styled(Box)(() => ({
  backgroundColor: "cyan",
  color: "black",
  textAlign: "left",
  height: "fit-content",
  padding: "20px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}));

const LinkText = styled(Typography)(() => ({
  color: "black",
  margin: "0 20px",
}));

const Navbar = () => {
  return (
    <>
      <Container>
        {/* <MenuUnstyled slotProps={{ listbox: { className: "my-listbox" } }}> */}
        <NavLink to="/">
          <LinkText varian="h3">Home</LinkText>
        </NavLink>
        <NavLink to="/about">
          <LinkText varian="h3">About</LinkText>
        </NavLink>
        <NavLink to="/gallery">
          <LinkText varian="h3">Gallery</LinkText>
        </NavLink>
        <NavLink to="/destination">
          <LinkText varian="h3">Destination</LinkText>
        </NavLink>
        <NavLink to="/blog">
          <LinkText varian="h3">Blog</LinkText>
        </NavLink>
        <NavLink to="/testimonial">
          <LinkText varian="h3">Testimonial</LinkText>
        </NavLink>
        <NavLink to="/contact">
          <LinkText varian="h3">Contact Us</LinkText>
        </NavLink>
        {/* </MenuUnstyled> */}
      </Container>
    </>
  );
};

export default Navbar;

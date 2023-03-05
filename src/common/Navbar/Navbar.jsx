import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Box, Button, styled, Typography } from "@mui/material";

const Container = styled(Box)(() => ({
  backgroundColor: "cyan",
  textAlign: "left",
  justifyContent: "space-between",
  width: " 100%",
  height: "10vh",
  lineHeight: "10vh",
  display: "flex",
  transition: "all 0.5s ease-in",
}));

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
}));

const LinkText = styled(Typography)(() => ({
  color: "black",
  margin: "0 20px",
  letterSpacing: "2px",
  opacity: 0.8,
  fontSize: "15px",
}));

const Btn = styled(Button)(() => ({
  backgroundColor: "black",
  color: "#fff",
  padding: "10px 20px",
}));

const Navbar = () => {
  return (
    <>
      <Container>
        <StyledBox>
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
        </StyledBox>
        <StyledBox>
          <NavLink to="/singIn">
            <LinkText varian="h3">Sing In</LinkText>
          </NavLink>
          <NavLink to="/register">
            <LinkText varian="h3">Register</LinkText>
          </NavLink>
          <NavLink to="/contact">
            <Btn>Request a Quote</Btn>
          </NavLink>
        </StyledBox>
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;

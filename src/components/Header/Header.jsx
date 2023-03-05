import styled from "@emotion/styled";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { Button, Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Container = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const LinkText = styled(Typography)(() => ({
  color: "#f7e7ce",
  margin: "0 20px",
  letterSpacing: "2px",
  opacity: 0.8,
  fontSize: "15px",
}));

const Header = () => {
  return (
    <>
      <Container>
        <Container>
          <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 200, md: 145 },
              maxWidth: { xs: 300, md: 200 },
            }}
            src="../../../public/images/logo.png"
          />
        </Container>
        <Container>
          <LinkText varian="h4">Working Hours</LinkText>
          <NavLink to="/contact">Monday - Sunday: 9:00am to 6:00pm</NavLink>
        </Container>{" "}
        <Container>
          <AiFillPhone />
          <LinkText varian="h4">Call us</LinkText>
          <NavLink to="/contact">+123 456789</NavLink>
        </Container>{" "}
        <Container>
          <AiFillMail />
          <LinkText varian="h4">Mail us</LinkText>
          <NavLink to="/contact">info@example.com</NavLink>
        </Container>
      </Container>
    </>
  );
};

export default Header;

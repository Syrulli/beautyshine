"use client";
import * as React from 'react';
import { useState } from 'react';
import {
  Stack,
  Toolbar,
  Typography,
  Container,
  AppBar,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from 'next/link';
import Image from 'next/image';

const pages = [
  { name: "About", id: "#about-section" },
  { name: "Objectives", id: "#objectives-section" },
  { name: "Core Values", id: "#core-values-section" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  }
  return (
    <>
      <Button variant="text" onClick={toggleDrawer(true)} sx={{ color: "white", display: { xs: "flex", sm: "none" } }}>
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: { xs: "inherit", sm: "none" },
          "& .MuiDrawer-paper": {
            height: "100%",
            width: "80%",
            backgroundColor: "#213D47",
            color: "white",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2, width: '100%', maxWidth: '1200px' }}>
          <Button onClick={toggleDrawer(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </Button>
        </Box>
        <NavList />
      </Drawer>
      <NavList
        sx={{
          display: { xs: "none", sm: "inherit" },
        }}
      />
    </>
  );
};

const NavList = ({ ...props }) => {
  const handleScroll = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Stack
      overflow="disable"
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      width={{ xs: "100%", sm: "initial" }}
      textAlign={{ xs: "center", sm: "initial" }}
      fontSize={{ xs: "15px", sm: "initial" }}
      {...props}
    >
      {pages.map((page) => (
        page.id ? (
          page.id.startsWith("#") ? (
            <Typography key={page.id} component="button" onClick={() => handleScroll(page.id)}
              sx={{
                color: { xs: "primary", sm: "white" },
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              {page.name}
            </Typography>
          ) : (
            <Link key={page.id} href={page.id} passHref>
              <Typography
                component="button"
                sx={{
                  color: { xs: "primary", sm: "black" },
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                {page.name}
              </Typography>
            </Link>
          )
        ) : null
      ))}
    </Stack>
  );
};

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#213D47" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 0.1, lg: 6, xl: 4 }, }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            sx={{
              px: { md: 5 },
            }}
          >
            <Button href='/'>
              <Image src="/logo.png" alt="Beautéshine Logo" width={40} height={40} />
            </Button>
            <Nav />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header; 
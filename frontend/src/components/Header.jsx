import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Chip,
  Box,
  Tabs,
  Tab,
  Popover,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Header() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLoginClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsSignUp(false);
  };

  const handleLoginClose = () => {
    setAnchorEl(null);
    setIsSignUp(false);
  };

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleBackToLogin = () => {
    setIsSignUp(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "login-popover" : undefined;

  const tabItems = [
    "All Products",
    "Promotions",
    "Business Cards & Stationery",
    "Flyers & Leaflets",
    "Magazines, Books & Catalogues",
    "Labels & Stickers",
    "Signage, Decals & Posters",
    "Banners & Textiles",
    "Displays",
    "Packaging & Bags",
    "Promotional Items",
    "Photo Products",
    "Design Services",
  ];

  const LoginForm = () => (
    <Box className="p-6 w-80">
      <Box className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="font-semibold">
          Login
        </Typography>
        <IconButton onClick={handleLoginClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
      />
      <Link href="#" className="text-sm text-blue-600 hover:underline">
        Forgot your password?
      </Link>
      <Button
        variant="contained"
        fullWidth
        className="mt-4 bg-blue-600 hover:bg-blue-700 !mb-2"
      >
        Login
      </Button>
      <Divider className="my-4" />
      <Button
        variant="outlined"
        fullWidth
        className="border-blue-500 text-blue-600 hover:bg-blue-50"
        onClick={handleSignUpClick}
      >
        Create New Account
      </Button>
    </Box>
  );

  const SignUpForm = () => (
    <Box className="p-6 w-80">
      <Box className="flex justify-between items-center mb-4">
        <Typography variant="h6" className="font-semibold">
          Sign Up
        </Typography>
        <IconButton onClick={handleLoginClose} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        size="small"
      />
      <Button
        variant="contained"
        fullWidth
        className="mt-4 bg-blue-600 hover:bg-blue-700 !mb-2"
      >
        Sign Up
      </Button>
      <Button
        startIcon={<ArrowBackIcon />}
        fullWidth
        className="mt-2 text-blue-600 hover:bg-blue-50"
        onClick={handleBackToLogin}
      >
        Back to Login
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Toolbar className="flex justify-between items-center py-2">
        <Typography
          variant="h5"
          component="h1"
          className="font-bold text-blue-600"
        >
          Super Fortnight
        </Typography>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          sx={{
            width: "20rem",
            "& .MuiOutlinedInput-root": {
              borderRadius: "9999px",
              backgroundColor: "rgb(243 244 246)",
              "&:hover": {
                backgroundColor: "rgb(229 231 235)",
              },
              "& fieldset": {
                borderColor: "rgb(209 213 219)",
                borderWidth: "1px",
              },
              "&:hover fieldset": {
                borderColor: "rgb(156 163 175)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgb(59 130 246)",
                borderWidth: "2px",
              },
            },
            "& .MuiOutlinedInput-input": {
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "rgb(156 163 175)" }} />
              </InputAdornment>
            ),
          }}
        />
        <Box className="flex items-center space-x-4">
          <Chip
            icon={<LocalShippingIcon className="text-green-500" />}
            label="Free shipping, Always"
            variant="outlined"
            className="border-green-500 text-green-600"
          />
          <Chip
            icon={<InfoIcon className="text-blue-500" />}
            label="First Order"
            variant="outlined"
            className="border-blue-500 text-blue-600"
          />
          <Button
            startIcon={<LocalPhoneIcon />}
            className="text-gray-600 hover:text-blue-600"
          >
            9348217080
          </Button>
          <Button
            startIcon={<LiveHelpIcon />}
            className="text-gray-600 hover:text-blue-600"
          >
            Need help
          </Button>
          <Button
            startIcon={<PersonIcon />}
            variant="outlined"
            className="border-blue-500 text-blue-600"
            onClick={handleLoginClick}
          >
            Login
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleLoginClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {isSignUp ? <SignUpForm /> : <LoginForm />}
          </Popover>
          <Button
            startIcon={<ShoppingCartIcon />}
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Basket
          </Button>
        </Box>
      </Toolbar>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="navigation tabs"
        className="bg-gray-100"
      >
        {tabItems.map((item, index) => (
          <Tab
            key={index}
            label={item}
            sx={{
              fontSize: "0.75rem",
              minWidth: "auto",
              px: 2,
              py: 1,
              "&.Mui-selected": {
                color: "rgb(37 99 235)",
                fontWeight: "bold",
              },
            }}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}

export default Header;

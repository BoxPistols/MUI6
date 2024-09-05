import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: true,
  },
  palette: {
    primary: {
      main: "#369", // Replace with your primary color
    },
    secondary: {
      main: "#234", // Replace with your secondary color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif", // Replace with your desired font family
  },
});

export default theme;

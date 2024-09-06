// main.tsx
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { Box, Select, MenuItem, Button, Typography } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  useColorScheme,
} from "@mui/material/styles";
import theme from "./theme";

const cache = createCache({
  key: "css",
  prepend: true,
  stylisPlugins: [],
});

const neotheme = createTheme({
  colorSchemes: {
    dark: theme.colorSchemes.dark,
    light: theme.colorSchemes.light,
  },
  // components: {
  //   ...theme.components,
  // },
});

export default function ModeSwitcher() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Box
      sx={{
        width: "auto",
        p: 3,
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        borderColor: "text.secondary",
      }}
    >
      <Select
        value={mode}
        onChange={(event) =>
          setMode(event.target.value as "system" | "light" | "dark")
        }
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </Box>
  );
}

ReactDOM.render(
  <ThemeProvider theme={neotheme}>
    <CacheProvider value={cache}>
      <CssBaseline />
      <ModeSwitcher />
      <App />
    </CacheProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

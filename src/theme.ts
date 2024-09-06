import { createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained" as const,
      },
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            textTransform: "none",
            border: `2px dashed ${blue[500]}`,
          },
        },
      ],
    },
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#e96812",
        },
        secondary: {
          main: "#564962",
        },
        background: {
          default: "#fff",
          paper: "#f5f5f5",
        },
        text: {
          primary: "#000",
          secondary: "#555",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#e507c7",
        },
        secondary: {
          main: "#7eb6ea",
        },
        background: {
          default: "#262626",
        },
        text: {
          primary: "#fff",
          secondary: "#aaa",
        },
      },
    },
  },
});

export default theme;

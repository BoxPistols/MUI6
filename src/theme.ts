import { blue } from "@mui/material/colors";

declare module "@mui/material/styles" {
	interface Theme {
		status: {
			danger: string;
		};
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			danger?: string;
		};
		cssVariables?: boolean;
		cssVarPrefix?: string;
		defaultColorScheme?: "light" | "dark" | "system";
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		dashed: true;
	}
}

const theme = {
	cssVariables: true,
	cssVarPrefix: "origin",
	defaultColorScheme: "light",
	status: {
		danger: "#e53e3e",
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
		// dark: true,
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
	// components
	components: {
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					variants: [
						{
							props: { variant: "outlined" },
							style: {
								textTransform: "none",
							},
						},
					],
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: "contained",
			},
			styleOverrides: {
				root: {
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
		},
	},
};

export default theme;

// main.tsx
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { MenuItem, Select } from "@mui/material";
import {
	ThemeProvider,
	createTheme,
	useColorScheme,
} from "@mui/material/styles";
import theme from "./theme";

const cache = createCache({
	key: "css",
	prepend: true,
	stylisPlugins: [],
});

const neotheme = createTheme(theme);

export default function ModeSwitcher() {
	const { mode, setMode } = useColorScheme();
	if (!mode) {
		return null;
	}
	return (
		<>
			<Select
				value={mode}
				onChange={(event) =>
					setMode(event.target.value as "system" | "light" | "dark")
				}
				size="small"
				sx={{
					position: "fixed",
					top: 12,
					right: 120,
					zIndex: 1000,
					backgroundColor: "background.paper",
					borderColor: "primary.main",
				}}
			>
				<MenuItem value="system">OS Set</MenuItem>
				<MenuItem value="light">Light</MenuItem>
				<MenuItem value="dark">Dark</MenuItem>
			</Select>
		</>
	);
}

ReactDOM.render(
	<ThemeProvider theme={neotheme} disableTransitionOnChange>
		<CacheProvider value={cache}>
			<CssBaseline />
			<ModeSwitcher />
			<App />
		</CacheProvider>
	</ThemeProvider>,
	document.getElementById("root"),
);

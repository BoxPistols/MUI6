import { Button, Typography } from "@mui/material";

function App() {
	return (
		<>
			{/* <App /> */}
			<Button>Hello World</Button>
			<Button variant="dashed">Hello World</Button>
			<Typography variant="h4" color="secondary">
				Hello secondary
			</Typography>
			<Button>Contained</Button>
			<Button variant="contained" disabled>
				Disabled
			</Button>
			<Button variant="contained" href="#contained-buttons">
				Link
			</Button>
		</>
	);
}
export default App;

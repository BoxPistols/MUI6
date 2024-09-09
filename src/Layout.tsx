import {
	Container,
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" style={{ flexGrow: 1 }}>
						タイトル
					</Typography>
					<Button color="inherit">ログイン</Button>
				</Toolbar>
			</AppBar>
			<Container
				sx={{
					padding: 4,
				}}
			>
				{children}
			</Container>
		</div>
	);
};

export default Layout;

import { Button } from "@mui/material";
import type { Meta, StoryFn } from "@storybook/react";

export default {
	title: "Components/Test",
	component: TestComponent,
	argTypes: {
		variant: {
			control: {
				type: "select",
				options: ["contained", "outlined", "text"],
			},
		},
	},
} as Meta;

export const Default: StoryFn = () => <TestComponent />;

function TestComponent() {
	// Add component code here
	return (
		<div>
			<Button variant="contained" color="primary">
				This is a test component
			</Button>
		</div>
	);
}

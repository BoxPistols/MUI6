import { styled } from "@mui/system";

const CustomButton = styled("button")({
  color: "var(--mui-palette-text-primary)",
  backgroundColor: "var(--mui-palette-primary-main)",
  padding: "10px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "var(--mui-palette-primary-main)",
  },
});

export default CustomButton;

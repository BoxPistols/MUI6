import { Button, Typography } from "@mui/material";
import Layout from "./Layout";
import { Grid } from "@mui/system";

function App() {
  return (
    <>
      <Layout>
        <Grid container spacing={2} direction="column">
          <Typography variant="h4" color="secondary">
            Hello secondary
          </Typography>
          <Button>Hello World</Button>
          <Button variant="outlined">Hello World</Button>
          <Button variant="dashed">Hello World</Button>
        </Grid>
      </Layout>
    </>
  );
}
export default App;

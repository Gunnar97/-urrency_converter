import { Grid, Skeleton } from "@mui/material";

const Loader = () => {
  return (
    <Grid item xs={12} md={3}>
      <Skeleton variant="rounded" height={60} />
    </Grid>
  );
};

export default Loader;

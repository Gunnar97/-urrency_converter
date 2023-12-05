import { Grid, Paper } from "@mui/material";

const ActualCourses = () => {
  const boxStyles = {
    background: "blue",
    marginBottom: "1rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0.75rem",
    gap: "2rem",
  };

  return (
    <Grid container component={Paper} maxWidth="md" sx={boxStyles}>
      <Grid item xs={12}>
        1
      </Grid>
      <Grid item container justifyContent="space-around" spacing={2}>
        <Grid item>2</Grid>
        <Grid item>3</Grid>
      </Grid>
    </Grid>
  );
};

export default ActualCourses;

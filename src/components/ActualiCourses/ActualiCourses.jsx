import { Alert, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { getCurrency } from "../../services/api";

const ActualCourses = () => {
  const boxStyles = {
    background: "fdfdfd",
    marginBottom: "1rem",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "1rem",
  };

  const [сurrentRate, setCurrentRate] = useState(0);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fatchCurrentRate = async () => {
      try {
        {
          const response = await getCurrency(
            "https://v6.exchangerate-api.com/v6/f30765524f3666b1c6120ed1/latest/UAH"
          );
          setCurrentRate(response.conversion_rates);
          setError(null);
        }
      } catch (error) {
        setError("Something went wrong! Try again!");
      }
    };
    fatchCurrentRate();

    // const timeIntervalId = setInterval(() => {
    //   setCurrentTime(new Date());
    // }, 1000);

    return () => {
      clearInterval(timeIntervalId);
    };
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();
  console.log(сurrentRate);
  return (
    <Paper elevation={3} sx={{ maxWidth: "md", ...boxStyles }}>
      <Grid container gap={"14px"}>
        <Grid item xs={12} gap={"10px"}>
          <div>{formattedTime}</div>
          <div>{formattedDate}</div>
        </Grid>
        <Grid item container justifyContent="space-around" spacing={2}>
          <Grid item>
            <strong>USD/UAH</strong>
            <br />
            {сurrentRate.USD}
          </Grid>
          <Grid item>
            <strong>EUR/UAH</strong>
            <br />
            {сurrentRate.EUR}
          </Grid>
        </Grid>
        {error && (
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        )}
      </Grid>
    </Paper>
  );
};

export default ActualCourses;

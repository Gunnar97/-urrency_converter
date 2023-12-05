import { Button, Grid } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const SwitchCurrency = () => {
  return (
    <Grid item>
      <Button
        sx={{
          borderRadius: 2,
          height: "100%",
        }}
      >
        <CompareArrowsIcon sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};

export default SwitchCurrency;

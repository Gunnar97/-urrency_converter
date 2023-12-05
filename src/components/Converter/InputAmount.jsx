import { Grid, InputAdornment, TextField } from "@mui/material";

const InputAmount = ({ value, setValue }) => {
  return (
    <Grid item xs={12}>
      <TextField
        value={value}
        onChange={setValue}
        label="Amount"
        fullWidth
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;

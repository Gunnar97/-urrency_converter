import { Grid, InputAdornment, TextField } from "@mui/material";

const InputAmount = ({ value, setValue, error }) => {
  return (
    <Grid item xs={12}>
      <TextField
        error={error}
        value={value}
        onChange={setValue}
        label="Amount"
        fullWidth
        minValue={1}
        InputProps={{
          type: "number",
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};

export default InputAmount;

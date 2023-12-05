import { Grid, InputAdornment, TextField } from "@mui/material";

const InputAmount = ({ value, setValue }) => {
  const handleInputAmountChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <Grid item xs={12}>
      <TextField
        value={value}
        onChange={handleInputAmountChange}
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

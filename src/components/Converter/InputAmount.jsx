import { Grid, InputAdornment, TextField } from "@mui/material";

const InputAmount = ({ value, setValue }) => {
  // const handleInputAmountChange = (event) => {
  //   const newValue = event.target.value;
  //   if (newValue >= 0 || newValue === "") {
  //     setValue(newValue);
  //   } else {
  //     console.log("Please enter a valid value!");
  //   }
  // };

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

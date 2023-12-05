import { Grid, InputAdornment, TextField } from "@mui/material";
import PropTypes from "prop-types";

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

InputAmount.propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
};
export default InputAmount;

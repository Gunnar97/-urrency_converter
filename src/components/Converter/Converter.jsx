import { Grid } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCurrency from "./SelectCurrency";
import SwitchCurrency from "./SwitchCurrency";
import { useState } from "react";

const Converter = () => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <InputAmount />
      </Grid>
      <Grid item xs={12} md={6}>
        <SelectCurrency
          value={fromCurrency}
          setValue={setFromCurrency}
          label="From"
        />
      </Grid>
      <Grid item xs={12}>
        <SwitchCurrency />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputAmount />
      </Grid>
      <Grid item xs={12} md={6}>
        <SelectCurrency
          value={toCurrency}
          setValue={setToCurrency}
          label="To"
        />
      </Grid>
    </Grid>
  );
};

export default Converter;

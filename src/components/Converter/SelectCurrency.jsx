import { Alert, Autocomplete, Grid, TextField } from "@mui/material";

import useAxios from "../../hooks/useAxios";
import Loader from "../Loader/Loader";

const SelectCurrency = ({ value, setValue, label }) => {
  const [data, loading, error] = useAxios("https://restcountries.com/v3.1/all");

  const countryWithCurrency = data
    .filter((country) => "currencies" in country)
    .map(({ currencies, name }) => {
      return `${Object.keys(currencies)[0]} - ${name.common}`;
    });
  const uniqueCurrencies = [...new Set(countryWithCurrency)];
  const sortedData = uniqueCurrencies.sort((a, b) =>
    a.substring(0, 3).localeCompare(b.substring(0, 3))
  );

  return (
    <Grid item>
      {loading && <Loader />}
      {error ? (
        <Alert variant="outlined" severity="error">
          Something went wrong! Try again!
        </Alert>
      ) : (
        <Autocomplete
          value={value}
          disableClearable
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          options={sortedData}
          renderInput={(params) => <TextField {...params} label={label} />}
        />
      )}
    </Grid>
  );
};

export default SelectCurrency;

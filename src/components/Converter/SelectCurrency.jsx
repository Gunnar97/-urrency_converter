import { Autocomplete, Grid, TextField } from "@mui/material";
import useAxios from "../../hooks/useAxios";
import Loader from "../Loader/Loader";

const SelectCurrency = ({ value, setValue, label }) => {
  const [data, loading, error] = useAxios("https://restcountries.com/v3.1/all");
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return "Something went wrong! Please try again!";
  }

  const countryWithCurrency = data
    .filter((country) => "currencies" in country)
    .map(({ currencies, name }) => {
      return `${Object.keys(currencies)[0]} - ${name.common}`;
    });
  return (
    <Grid item>
      <Autocomplete
        value={value}
        disableClearable
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        options={countryWithCurrency}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};

export default SelectCurrency;

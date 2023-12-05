import { Alert, Grid } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCurrency from "./SelectCurrency";
import SwitchCurrency from "./SwitchCurrency";
import { useContext, useEffect } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import { getCurrency } from "../../services/api";

const Converter = () => {
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    fromAmount,
    setFromAmount,
    toAmount,
    setToAmount,
    rate,
    setRate,
  } = useContext(CurrencyContext);

  const codeFromCurrency = fromCurrency.split(" ")[0];
  const codeToCurrency = toCurrency.split(" ")[0];

  const handleFromAmountChange = (eve) => {
    const newValue = eve.target.value;
    setFromAmount(newValue);
    setToAmount((parseFloat(newValue) * rate).toFixed(2));
  };

  const handleToAmountChange = (eve) => {
    const newValue = eve.target.value;
    setToAmount(newValue);
    setFromAmount((parseFloat(newValue) / rate).toFixed(2));
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        {
          const response = await getCurrency(
            "https://api.currencyapi.com/v3/latest",
            {
              apikey: "cur_live_KRnDh1C3e9qj6ks7fAGWebBwqkyjBS3DkvvyxtEI",
              currencies: codeToCurrency,
              base_currency: codeFromCurrency,
            }
          );
          setRate(response.data[codeToCurrency].value);
        }
      } catch (error) {
        <Alert variant="outlined" severity="error">
          Something went wrong! Try again!
        </Alert>;
      }
    };
    fetchCurrency();
  }, [codeFromCurrency, codeToCurrency, setRate]);

  useEffect(() => {
    setToAmount((parseFloat(fromAmount) * rate).toFixed(2));
  }, [rate]);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <InputAmount value={fromAmount} setValue={handleFromAmountChange} />
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
        <InputAmount value={toAmount} setValue={handleToAmountChange} />
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

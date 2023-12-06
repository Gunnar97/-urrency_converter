import { Alert, Grid } from "@mui/material";
import InputAmount from "./InputAmount";
import SelectCurrency from "./SelectCurrency";
import SwitchCurrency from "./SwitchCurrency";
import { useContext, useEffect, useState } from "react";
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

  const [error, setError] = useState(null);

  const codeFromCurrency = fromCurrency.split(" ")[0];
  const codeToCurrency = toCurrency.split(" ")[0];

  const handleFromAmountChange = (eve) => {
    const newValue = eve.target.value;
    if (!newValue.includes("-") || newValue > 0 || newValue === "") {
      setFromAmount(newValue);
      setToAmount((parseFloat(newValue) * rate).toFixed(3));
      setError(null);
    } else {
      setError("Number should be greater than 0");
    }
  };

  const handleToAmountChange = (eve) => {
    const newValue = eve.target.value;
    if (!newValue.includes("-") || newValue > 0 || newValue === "") {
      setToAmount(newValue);
      setFromAmount((parseFloat(newValue) / rate).toFixed(3));
      setError(null);
    } else {
      setError("Number should be greater than 0");
    }
  };

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        {
          const response = await getCurrency(
            "https://api.currencyapi.com/v3/latest",
            {
              apikey: "fca_live_pmF50MD73d07AdENqpTZapR2IXUKyEsybCFxBvEC",
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
    setToAmount((parseFloat(fromAmount) * rate).toFixed(3));
  }, [rate]);

  return (
    <Grid container spacing={2} justifyContent="center" padding={"40px"}>
      {error && (
        <Grid item xs={12}>
          <Alert variant="outlined" severity="warning">
            {error}
          </Alert>
        </Grid>
      )}
      <Grid item xs={12} md={6}>
        <InputAmount
          value={fromAmount}
          setValue={handleFromAmountChange}
          error={!!error}
        />
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
        <InputAmount
          value={toAmount}
          setValue={handleToAmountChange}
          error={!!error}
        />
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

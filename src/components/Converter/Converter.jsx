import { Grid } from "@mui/material";
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

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        {
          const response = await getCurrency(
            "https://api.currencyapi.com/v3/latest",
            {
              apikey: "cur_live_gjmfFxKlEDWT7i0kNQ3XEKECcMtklf2iZ3TavhF8",
              currencies: codeToCurrency,
              base_currency: codeFromCurrency,
            }
          );
          setRate(response.data[codeToCurrency].value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCurrency();
  }, [codeFromCurrency, codeToCurrency, setRate]);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <InputAmount value={fromAmount} setValue={setFromAmount} />
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
        <InputAmount value={toAmount} setValue={setToAmount} />
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

import axios from "axios";

export const getCurrency = async (url, params = {}) => {
  const { data } = await axios.get(url, {
    params: {
      ...params,
    },
  });
  return data;
};

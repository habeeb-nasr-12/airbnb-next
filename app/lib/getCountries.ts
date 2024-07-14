import countries from "world-countries";

const formatedCountries = countries.map((item) =>( {
  value: item.cca2,
  label: item.name.common,
  flag: item.flag,
  latLang: item.latlng,
  region: item.region,
}));

export const useCountries = () => {
  const getAllCountries = () => formatedCountries;

  const getCountryByValue = (value: string) => {
    return formatedCountries.find((item) => item.value === value);
  };

  return { getAllCountries, getCountryByValue };
};

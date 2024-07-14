"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useCountries } from "@/app/lib/getCountries";
import HomeMap from "../HomeMap";

export default function SelectCountry({ name }: { name: string }) {
  const { getAllCountries } = useCountries();
  const countries = getAllCountries();

  // Log countries to ensure they are correctly retrieved
  console.log("Countries:", countries);

  const [location, setLocation] = React.useState(""); // Initial default value

  return (
    <>
      <input type="hidden" name={name} value={location} />
      <div className="flex flex-col gap-4">
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          helperText="Please select your country"
          variant="filled"
          className="w-full"
          onChange={(e) => setLocation(e.target.value)}
        >
          {countries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label} / {option.region}
            </MenuItem>
          ))}
        </TextField>

        <HomeMap location={location as string} />
      </div>
    </>
  );
}

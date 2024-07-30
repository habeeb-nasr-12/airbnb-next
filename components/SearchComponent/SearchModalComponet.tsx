"use client";
import { Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import DialogContentText from "@mui/material/DialogContentText";

import { useState } from "react";
import Box from "@mui/material/Box";
import * as React from "react";

import { useCountries } from "@/app/lib/getCountries";

import SubmitButton from "../SubmitButton";
import { Card, CardHeader } from "../ui/card";
import Counter from "../Counter/Counter";

const SearchModalComponent = () => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const { getAllCountries } = useCountries();
  const countries = getAllCountries();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const SubmitButtonLocal = () => {
    return <SubmitButton />;
  };

  return (
    <>
      <div
        className="rounded-full  py-2 px-5   border flex items-center cursor-pointer"
        onClick={handleOpen}
      >
        <div className="flex h-full divide-x font-medium">
          <p className="px-4">Any where</p>
          <p className="px-4">Any week</p>
          <p className="px-4">Any Guests</p>
        </div>
        <Search className="bg-primary text-white p-1 h-8 w-8 rounded-full  " />
      </div>

      <BootstrapDialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        open={open}
        onClose={handleClose}
        sx={{
          "& .mui-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            width: "100%",
            borderRadius: "10px",
          },
        }}
      >
        <DialogContent className="min-w-[40%]">
          <Box component="form" className="flex flex-col gap-4">
            <>
              <DialogTitle className="text-3xl font-semibold">
                Select all the info you need
              </DialogTitle>

              <Card>
                <CardHeader className="flex  ">
                  <div className="flex sm:flex-row flex-col items-center justify-between">
                    <h3 className="underline font-medium">Guests</h3>
                    <p className="text-muted-foreground sm:my-0 my-4 text-sm  ">
                      How many guests do you want?
                    </p>
                    <Counter name="Guests" />
                  </div>
                </CardHeader>
                <CardHeader className="   flex  ">
                  <div className="flex sm:flex-row flex-col items-center justify-between">
                    <h3 className="underline font-medium">Rooms</h3>
                    <p className="text-muted-foreground sm:my-0 my-4 text-sm  ">
                      How many rooms do you want?
                    </p>
                    <Counter name="Rooms" />
                  </div>
                </CardHeader>
                <CardHeader className=" flex  ">
                  <div className="flex sm:flex-row flex-col items-center justify-between">
                    <h3 className="underline font-medium">bathrooms</h3>
                    <p className="text-muted-foreground sm:my-0 my-4 text-sm  ">
                      How many bathrooms do you want?
                    </p>
                    <Counter name="bathrooms" />
                  </div>
                </CardHeader>
              </Card>
            </>

            <DialogActions>
              <SubmitButtonLocal />
            </DialogActions>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};

export default SearchModalComponent;

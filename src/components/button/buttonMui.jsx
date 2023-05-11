import React from "react";
import ButtonMui from "@mui/material/Button";
import { SendIcon } from '@mui/icons-material/Send'

export const ButtonMu = ({ children, setcounter, newValue, startIcon }) => {
  return (
    <>
      <ButtonMui
        variant="contained"
        startIcon={startIcon}
        onClick={() => setcounter(newValue)}
      >
        {children}
      </ButtonMui>
    </>

  )
}

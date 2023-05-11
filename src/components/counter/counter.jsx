import React, { useState } from "react";
import { Button } from "../button/button";
import { ButtonMu } from "../button/buttonMui";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import { ButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { purple, red, green, yellow, orange } from "@mui/material/colors";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";


export const Counter = ({ initialValue = 100, increment = 1, decrement = 1 }) => {
  const [counter, setcounter] = useState(initialValue);

  return (
    <>
      <Container sx={{ border: 5, bgcolor: "yellow" }} maxWidth="sm">
        <Grid sx={{ margin: 0, bgcolor: "#111", color: "white" }} container spacing={2}>
          <Grid md={8} xs={12}>
            <Typography color={orange[500]} variant="h1" align="center">Counter</Typography>
          </Grid>
          <Grid md={4} xs={12}>
            <Typography color={green[500]} variant="h2" align="center" > {counter}</Typography >
          </Grid>
          <Grid md={12} xs={12}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <ButtonMu startIcon={<AddCircleIcon />} setcounter={setcounter} newValue={counter + increment}>+</ButtonMu>
              <ButtonMu startIcon={<RemoveCircleIcon />} setcounter={setcounter} newValue={counter - decrement}>-</ButtonMu>
              <ButtonMu startIcon={<RestartAltIcon />} setcounter={setcounter} newValue={initialValue}>Reset</ButtonMu>
            </ButtonGroup>
          </Grid>
        </Grid>

      </Container>
    </>

  )
}


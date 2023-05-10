import React, { useState } from "react";
import { Button } from "../button/button";

export const Counter = ({ initialValue = 100, increment = 1, decrement = 1 }) => {
  const [counter, setcounter] = useState(initialValue);




  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <Button setcounter={setcounter} newValue={counter + increment} style={{ color: "orange" }}>+</Button>
      <Button setcounter={setcounter} newValue={counter - decrement} style={{ color: "blue" }}>-</Button>
      <Button setcounter={setcounter} newValue={initialValue} style={{ color: "green" }}>Reset</Button>
    </>

  )
}


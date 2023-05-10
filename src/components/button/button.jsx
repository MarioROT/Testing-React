import React from "react";

export const Button = ({ children, setcounter, newValue, style }) => {
  const handleSetCounter = () => {
    setcounter(newValue)
  }


  return (
    <>
      <button
        onClick={handleSetCounter}
        style={style}>{children}</button>
    </>

  )
}

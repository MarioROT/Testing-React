import React from "react";
import { SocialNetworks } from "./components/SocialNetworks/SocialNetworks";
import { NavBar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";

export const App = () => {
  return (
    <>
      <NavBar />
      <SocialNetworks />
      <Footer />
    </>
  )
}



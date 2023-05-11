import React from "react";
import { SocialNetworks } from "./components/SocialNetworks/SocialNetworks";
import { NavBar } from "./components/navBar/navBar";
import { Footer } from "./components/footer/footer";
import { Counter } from "./components/counter/counter";
import { Home } from "./components/home/home";
import { Route, Routes, Navigate } from "react-router-dom";
import { NotFound } from "./components/notfoud/NotFound";


export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="social-networks" element={<SocialNetworks />} />
        <Route path="counter/1" element={<Counter key={1} initialValue={100} increment={5} decrement={5} />} />
        <Route path="counter/2" element={<Counter key={2} initialValue={0} increment={10} />} />
        {/* <Route path='*' element={<Navigate to='/' />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}



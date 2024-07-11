import React from "react";
import Hero from "./feautures/hero";
import Counter from "./components/counter";
import Network from "./feautures/networks";

import Products from "./feautures/product";

import JoinUs from "./feautures/joinus";

import NavFootLayout from "./layouts/NavFootLayout";
import FAQ from "./feautures/faq";
import About from "./feautures/about";
import Skills from "./feautures/skills";
import Testimonial from "./feautures/testimonial";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <NavFootLayout>
        <Hero />
        <Counter />
        <About />
        <Network />

        <Products />
        <FAQ />
        <Skills />
        <Testimonial />
        <JoinUs />
      </NavFootLayout>
    </div>
  );
}

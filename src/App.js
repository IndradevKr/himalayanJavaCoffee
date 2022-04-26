import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Menus from "./Components/Menus";
import Services from "./Components/services";
import ServiceItem from "./Components/ServiceItem";
import Testimonials from "./Components/Testimonials";
import FindUs from "./Components/FindUs";
import SocialContent from "./Components/SocialContent";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Menus />
      <Services item = {ServiceItem} />
      <Testimonials />
      <FindUs />
      <SocialContent />
    </main>
    <Footer />
    </>
  );
}

export default App;

import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Staff";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import ScrollTriggerProxy from './components/ScrollTriggerProxy';



function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, [])

  return (
    <div>
      <ThemeProvider theme={dark}>

        <AnimatePresence>
          {loaded ? null : <Loader />}
        </AnimatePresence>
        <ScrollTriggerProxy />

      </ThemeProvider>

      <Navbar />
      <Hero />
      <About />
      <Servicios />
      <Contact />
      <Features />
      <Footer />

    </div>
  );
}

export default App;

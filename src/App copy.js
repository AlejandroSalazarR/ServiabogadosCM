import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Features from "./components/Staff";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'



function App() {
  const containerRef = useRef(null);

  const [ setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, [])


  return (
    <>
      

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            }
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >

            <main className='App' data-scroll-container ref={containerRef}>
              <Navbar />
              <Hero />
              <About />
              <Servicios />
              <Contact />
              <Features />
              <Footer />
            </main>
        </LocomotiveScrollProvider>
    </>
  );
}

export default App;

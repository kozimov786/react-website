import React from "react";
import AboutUs from "./pages/AboutUs";
//Global style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs"
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <div className="container">
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path='/' exact>
              <AboutUs />
            </Route>
            <Route path='/work' exact >
              <OurWork />
            </Route>
            <Route path='/work/:id'>
              <MovieDetail />
            </Route>
            <Route path='/contact'>
              <ContactUs />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

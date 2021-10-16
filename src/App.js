import React from "react";
import AboutUs from "./pages/AboutUs";
//Global style
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App container">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;

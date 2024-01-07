import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Main from "./pages/Main";
// GLOBAL
export const AppContext = React.createContext();

function App() {
  // LOCAL
  const [library, setLibrary] = useState([]);
  const [bag, setBag] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
        <Main />
      </AppContext.Provider>
    </>
  );
}

export default App;

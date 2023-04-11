import {createContext, useState} from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";

export const userDetailsContext = createContext({})

function App() {
  const [name, setName] = useState('');
  return (
    <userDetailsContext.Provider value={{
        name,
        setName
    }}>
      <Component1 />
      <Component2 />
      <Component3 />
    </userDetailsContext.Provider>
  );
}

export default App;

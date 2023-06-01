import React from "react";
import { DataProvider } from "./Context/dataprovider";
import Login from './Components/Login/Login';

function App() {
  return (
    <DataProvider>
      <div>
        <Login/>
      </div>
    </DataProvider>
  );
}

export default App;
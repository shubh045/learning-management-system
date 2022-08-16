import React from "react";
import Routes from "./route";
import { AuthProvider } from "./AuthContext";



function App() {
  return (
    <AuthProvider>
     <Routes/> 
    </AuthProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Succes from "./pages/Succes";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/succes" 
          element={<ProtectedRoute element= {<Succes/>}></ProtectedRoute>}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

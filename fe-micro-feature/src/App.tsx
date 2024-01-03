import React from "react"
import Home from "./pages/home";
import DetailPaslon from "./pages/detail_paslon";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/login";

const App: React.FC = () => {
  const isLogin: boolean = true

  function IsLogin() {
    const isLogin = false
    if(isLogin) {
      return <Outlet />
    }
  
    return <Navigate to="/auth" />
  }

  return (
    <Routes>

      <Route path="/" element={<IsLogin />} >
        <Route path="/detail-paslon" Component={DetailPaslon} />
        <Route path="/home" element={<Home isLogin={isLogin} /> } />
      </Route>

      <Route path="/auth" element={<Login />} />
    </Routes>
  );
};

export default App;

// /home atau /
// /detail-paslon

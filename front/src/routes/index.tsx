import { Route, Routes } from "react-router-dom";
import {Dashboard} from "../pages/Dahsboard";
import Login from "../pages/Login";

export const RouteMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};


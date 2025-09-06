import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

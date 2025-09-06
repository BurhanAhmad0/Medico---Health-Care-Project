import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./Pages/Home.jsx"));
const About = React.lazy(() => import("./Pages/About.jsx"));
const Services = React.lazy(() => import("./Pages/Services.jsx"));
const Contact = React.lazy(() => import("./Pages/Contact.jsx"));

import MainLayout from "./Layouts/MainLayout.jsx";
import Loader from "./Components/Loader.jsx";

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

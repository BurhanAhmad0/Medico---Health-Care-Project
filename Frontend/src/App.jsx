import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader.jsx";
import Services from "./Pages/Services.jsx";

const Home = React.lazy(() => import("./Pages/Home.jsx"));
const About = React.lazy(() => import("./Pages/About.jsx"));
const MainLayout = React.lazy(() => import("./Layouts/MainLayout.jsx"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

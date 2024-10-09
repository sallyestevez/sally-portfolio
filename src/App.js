import React from "react";

// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styling & Components
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import OtherWork from "./pages/OtherWork";
// import Project from "./pages/Project";
import Projects from "./pages/Projects";
import EclipseSoundscapesProject from "./pages/project-pages/EclipseSoundscapesProject";
import Ktown4uRedesignProject from "./pages/project-pages/Ktown4uRedesignProject";
import DiscordProject from "./pages/project-pages/DiscordProject";
import RetailHorrorStoriesProject from "./pages/project-pages/RetailHorrorStoriesProject";
import KirbysCornerProject from "./pages/project-pages/KirbysCornerProject";
import MiiverseRevivalProject from "./pages/project-pages/MiiverseRevivalProject";
import VisitMiraProject from "./pages/project-pages/VisitMiraProject";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // goes to page based on file path
  const router = createBrowserRouter([
    {
      // home page
      path: "/",
      element: (
      <Home/>
      ),
    },
    {
      // projects page
      path: "/projects",
      element: (<Projects />
      ),
    },
    {
      // other work page
      path: "/other_work",
      element: (<OtherWork />
      ),
    },
    {
      // about page
      path: "/about",
      element: (<AboutPage />
      ),
    },
    {
      path: "/project/ktown4u-redesign",
      element: (<Ktown4uRedesignProject />

      ),
    },
    {
      path: "/project/eclipse-soundscapes",
      element: (<EclipseSoundscapesProject />),
    },
    {
      path: "/project/discord-file-compressor",
      element: (<DiscordProject />),
    },
    {
      path: "/project/retail-horror-stories",
      element: (<RetailHorrorStoriesProject />),
    },
    {
      path: "/project/kirbys-corner",
      element: (<KirbysCornerProject />),
    },
    {
      path: "/project/miiverse-revival",
      element: (<MiiverseRevivalProject />),
    },
    {
      path: "/project/visit-mira",
      element: (<VisitMiraProject />),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

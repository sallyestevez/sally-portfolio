import React from "react";

// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Styling & Components
import "./App.css";
import ScrollButton from "./components/ToTop";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import OtherWork from "./pages/OtherWork";
import Projects from "./pages/Projects";

// Project Pages
import EclipseSoundscapesProject from "./pages/project-pages/EclipseSoundscapesProject";
import DiscordProject from "./pages/project-pages/DiscordProject";
import RetailHorrorStoriesProject from "./pages/project-pages/RetailHorrorStoriesProject";
import KirbysCornerProject from "./pages/project-pages/KirbysCornerProject";
import MiiverseRevivalProject from "./pages/project-pages/MiiverseRevivalProject";
import VisitMiraProject from "./pages/project-pages/VisitMiraProject";

// Other Work Pages
import UIProject from "./pages/other-work-pages/UIProject";
import RedVelvetProject from "./pages/other-work-pages/RedVelvetProject";
import WeatherSoundsProject from "./pages/other-work-pages/WeatherSoundsProject";
import AudioVisualizerProject from "./pages/other-work-pages/AudioVisualizerProject";
import CosmicHarmoniesProject from "./pages/other-work-pages/CosmicHarmoniesProject";
import SunAndLOONAProject from "./pages/other-work-pages/SunAndLOONAProject";
import KnitsProject from "./pages/other-work-pages/KnitsProject";
import Ktown4uRedesignProject from "./pages/other-work-pages/Ktown4uRedesignProject";

// Error Page
import NotFound from "./components/NotFound";

// Layout component for scroll-to-top
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

function App() {
  // goes to page based on file path
  const router = createBrowserRouter(
    [
      {
        element: <Layout />, // Wrap all routes in Layout
        children: [
          {
            // home page (root)
            path: "/",
            element: <Home />,
            errorElement: <NotFound />,
          },
          {
            // home page (index)
            path: "/index",
            element: <Home />,
            errorElement: <NotFound />,
          },
          {
            // projects page
            path: "/projects",
            element: <Projects />,
          },
          {
            // other work page
            path: "/other_work",
            element: <OtherWork />,
          },
          {
            // about page
            path: "/about",
            element: <AboutPage />,
          },
          {
            // Eclipse Soundscapes project page
            path: "/projects/eclipse-soundscapes",
            element: <EclipseSoundscapesProject />,
          },
          {
            // Discord project page
            path: "/projects/discord-file-compressor",
            element: <DiscordProject />,
          },
          {
            // Retail Horror Stories project page
            path: "/projects/retail-horror-stories",
            element: <RetailHorrorStoriesProject />,
          },
          {
            // Kirby's Corner project page
            path: "/projects/kirbys-corner",
            element: <KirbysCornerProject />,
          },
          {
            // Miiverse Revival project page
            path: "/projects/miiverse-revival",
            element: <MiiverseRevivalProject />,
          },
          {
            // Visit Mira project page
            path: "/projects/visit-mira",
            element: <VisitMiraProject />,
          },
          {
            // Ktown4u project page
            path: "/other-work/ktown4u-redesign",
            element: <Ktown4uRedesignProject />,
          },
          {
            // 100 Days of UI project page
            path: "/other-work/100-days-of-ui",
            element: <UIProject />,
          },
          {
            // Red Velvet typography project page
            path: "/other-work/red-velvet-typography",
            element: <RedVelvetProject />,
          },
          {
            // WeatherSounds project page
            path: "/other-work/weather-sounds",
            element: <WeatherSoundsProject />,
          },
          {
            // Audio Visualizer project page
            path: "/other-work/audio-visualizer",
            element: <AudioVisualizerProject />,
          },
          {
            // Cosmic Harmonies project page
            path: "/other-work/cosmic-harmonies",
            element: <CosmicHarmoniesProject />,
          },
          {
            // Sun and LOONA project page
            path: "/other-work/sun-and-LOONA",
            element: <SunAndLOONAProject />,
          },
          {
            // Knitting projects page
            path: "/other-work/knits",
            element: <KnitsProject />,
          },
          {
            // Catch-all 404 route
            path: "*",
            element: <NotFound />,
            errorElement: <NotFound />,
          },
        ],
      },
    ],
    {
      basename: "/sally-portfolio",
    }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
      <ScrollButton />
    </div>
  );
}

export default App;

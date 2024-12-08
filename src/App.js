import React from "react";

// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styling & Components
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import OtherWork from "./pages/OtherWork";
import Projects from "./pages/Projects";
import EclipseSoundscapesProject from "./pages/project-pages/EclipseSoundscapesProject";
import Ktown4uRedesignProject from "./pages/project-pages/Ktown4uRedesignProject";
import DiscordProject from "./pages/project-pages/DiscordProject";
import RetailHorrorStoriesProject from "./pages/project-pages/RetailHorrorStoriesProject";
import KirbysCornerProject from "./pages/project-pages/KirbysCornerProject";
import MiiverseRevivalProject from "./pages/project-pages/MiiverseRevivalProject";
import VisitMiraProject from "./pages/project-pages/VisitMiraProject";
import UIProject from "./pages/other-work-pages/UIProject";
import RedVelvetProject from "./pages/other-work-pages/RedVelvetProject";
import WeatherSoundsProject from "./pages/other-work-pages/WeatherSoundsProject";
import AudioVisualizerProject from "./pages/other-work-pages/AudioVisualizerProject";
import CosmicHarmoniesProject from "./pages/other-work-pages/CosmicHarmoniesProject";
import SunAndLOONAProject from "./pages/other-work-pages/SunAndLOONAProject";
import KnitsProject from "./pages/other-work-pages/KnitsProject";

function App() {
  // goes to page based on file path
  const router = createBrowserRouter([
    {
      // home page
      path: "/",
      element: <Home />,
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
      path: "/project/ktown4u-redesign",
      element: <Ktown4uRedesignProject />,
    },
    {
      path: "/project/eclipse-soundscapes",
      element: <EclipseSoundscapesProject />,
    },
    {
      path: "/project/discord-file-compressor",
      element: <DiscordProject />,
    },
    {
      path: "/project/retail-horror-stories",
      element: <RetailHorrorStoriesProject />,
    },
    {
      path: "/project/kirbys-corner",
      element: <KirbysCornerProject />,
    },
    {
      path: "/project/miiverse-revival",
      element: <MiiverseRevivalProject />,
    },
    {
      path: "/project/visit-mira",
      element: <VisitMiraProject />,
    },
    {
      path: "/other-work/100-days-of-ui",
      element: <UIProject />,
    },
    {
      path: "/other-work/red-velvet-typography",
      element: <RedVelvetProject />,
    },
    {
      path: "/other-work/weather-sounds",
      element: <WeatherSoundsProject />,
    },
    {
      path: "/other-work/audio-visualizer",
      element: <AudioVisualizerProject />,
    },
    {
      path: "/other-work/cosmic-harmonies",
      element: <CosmicHarmoniesProject />,
    },
    {
      path: "/other-work/sun-and-LOONA",
      element: <SunAndLOONAProject />,
    },
    {
      path: "/other-work/knits",
      element: <KnitsProject />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

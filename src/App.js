import React, { useState } from "react";

// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styling & Components
import "./App.css";
import AboutPage from "./pages/AboutPage";
import Home from "./pages/Home";
import OtherWork from "./pages/OtherWork";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import EclipseSoundscapesProject from "./pages/EclipseSoundscapesProject";

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
      path: "/project/:id",
      element: <Project />,
    },
    {
      path: "/project/eclipse-soundscapes",
      element: <EclipseSoundscapesProject />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

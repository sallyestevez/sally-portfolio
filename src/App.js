// import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Styling & Components
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import OtherWork from "./pages/OtherWork";
import Projects from "./pages/Projects";

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
      element: <About />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

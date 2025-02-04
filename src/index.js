import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Blog from "./Blog";
import SeattleTimesDemo from "./demos/seattle-times/SeattleTimesDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />
  },
  {
    path: "/seattle-times",
    element: <SeattleTimesDemo />
  },
  {
    path: "/seattle-times/*",
    element: <SeattleTimesDemo />
  }
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
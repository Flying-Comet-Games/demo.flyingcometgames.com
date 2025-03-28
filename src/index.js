import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Blog from "./Blog";
import SeattleTimesDemo from "./demos/seattle-times/SeattleTimesDemo";
import SeattleTimesWordy from "./demos/seattle-times/SeattleTimesWordy";
import AlamedaPostDemo from "./demos/alameda-post/AlamedaPostDemo";
import OaklandsideDemo from "./demos/oaklandside/OaklandsideDemo";
import ColoradoSunDemo from "./demos/colorado-sun/ColoradoSunDemo";
import JocoDemo from "./demos/joco/JocoDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "/alameda-post",
    element: <AlamedaPostDemo />,
  },
  {
    path: "/seattle-times",
    element: <SeattleTimesDemo />,
  },
  {
    path: "/seattle-times/wordy",
    element: <SeattleTimesWordy />,
  },
  {
    path: "/oaklandside",
    element: <OaklandsideDemo />,
  },
  {
    path: "/colorado-sun",
    element: <ColoradoSunDemo />,
  },
  {
    path: "/joco",
    element: <JocoDemo />,
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

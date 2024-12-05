import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Blog from "./Blog";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Blog />);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { App } from "./components/app";

const container = document.getElementById("app");
ReactDOM.hydrateRoot(container, <BrowserRouter><App /></BrowserRouter>);
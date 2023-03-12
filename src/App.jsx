// import { CardActions } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import Home from "../src/common/Data/Home";
// import Cards from "./common/Data/Cards";
// import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "signIn",
      //   element: <Home slides={[1]} />,
      // },
      // {
      //   path: "profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "playground",
      //   element: <Playground />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

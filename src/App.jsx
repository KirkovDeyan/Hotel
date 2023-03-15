// import { CardActions } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Navbar from "./common/Navbar/Navbar";
import Home from "../src/common/Data/Home";
import Destination from "./components/Destinations/Destination";
import AllBlog from "./components/Blog/AllBlog";
import AllItem from "./components/Testimonial/AllItem";
import GaleryCards from "./components/gallery/GaleryCards";

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
      //   path: "about",
      //   element: <Home slides={[1]} />,
      // },
      {
        path: "gallery",
        element: <GaleryCards />,
      },
      {
        path: "destination",
        element: <Destination />,
      },
      {
        path: "blog",
        element: <AllBlog />,
      },
      {
        path: "testemonial",
        element: <AllItem />,
      },
      // {
      //   path: "contactus",
      //   element: <Playground />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;

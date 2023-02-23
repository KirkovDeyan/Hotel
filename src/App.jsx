import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Navbar from "./common/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      // {
      //   path: "/",
      //   element: <Home />,
      // },
      // {
      //   path: "signIn",
      //   element: <SignIn />,
      // },
      // {
      //   path: "about",
      //   element: <About />,
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

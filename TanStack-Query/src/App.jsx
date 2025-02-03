import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path: "/home",
        element: <Home/>,
        }
      ]
    },
  ]);
  return (
    <>
      <h1>TanStack-Query</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

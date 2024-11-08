import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import FichePaie from "./pages/FichePaie/FichePaie";
import Layout from "./layout/Layout";
import StudentManager from "./pages/StudentManager/StudentManager";
import OTelecom from "./pages/OTelecom/OTelecom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects/payroll-management",
        element: <FichePaie />,
      },
      {
        path: "/projects/student-manager",
        element: <StudentManager />,
      },
      {
        path: "/projects/o-telecom",
        element: <OTelecom />,
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
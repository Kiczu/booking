import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "./paths";
import Layout from "./Layout/Layout";
import UserProfile from "./pages/UserProfile/UserProfile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: paths.HOME,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.USER_PROFILE,
        element: <UserProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

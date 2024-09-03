import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { paths } from "./paths";
import Layout from "./Layout/Layout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import UserProfile from "./pages/UserProfile/UserProfile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
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
      {
        path: paths.SIGN_IN,
        element: <SignIn />,
      },
      {
        path: paths.SIGN_UP,
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

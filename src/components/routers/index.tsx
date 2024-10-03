import { Suspense, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "@/pages/dashboard";

const router = createBrowserRouter([
  // {
  //   path: '/login',
  //   element: <ProtectedRoute element={LoginPage} title="title.login" />,
  // },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <ProtectedRoute element={DashboardPage} title="Dashboard" />,
      },
    ],
  },
]);

export default function MainRoute() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  ) : null;
}

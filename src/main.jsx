import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import "./assets/styles/index.scss";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Theme } from "./const/theme";
import { MainPage } from "./pages/MainPage";
import { Suspense } from "react";
import { PizzasPage } from "./pages/PizzasPage";
import { RollsPage } from "./pages/RollsPage";
import { OthersPage } from "./pages/OthersPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MainPage />,
          </Suspense>
        ),
      },
      {
        path: "/pizzas",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <PizzasPage />,
          </Suspense>
        ),
      },
      {
        path: "/rolls",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RollsPage />,
          </Suspense>
        ),
      },
      {
        path: "/others",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <OthersPage />,
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFoundPage />,
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider initialTheme={Theme.LIGHT}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

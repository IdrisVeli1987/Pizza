import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./assets/styles/index.scss";
import { Theme } from "./const/theme";
import { MainLayout } from "./layouts/MainLayout";
import { ThemeProvider } from "./providers/ThemeProvider";
import { routerNavigations } from "./const/router";
import { PageLoader } from "./ui/PageLoader";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { LayoutContextProvider } from "./providers/LayoutContextProvier";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: routerNavigations.map(({ path, element }) => ({
      path: path,
      element: <Suspense fallback={<PageLoader />}>{element}</Suspense>,
    })),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider initialTheme={Theme.LIGHT}>
      <LayoutContextProvider>
        <RouterProvider router={router} />
      </LayoutContextProvider>
    </ThemeProvider>
  </Provider>
);

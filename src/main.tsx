import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import MainLayout from "./features/dashboard/components/layouts/main-layout.tsx";
import MoviesLayout from "./features/dashboard/components/layouts/movies-layout.tsx";
import NotFound from "./features/dashboard/components/layouts/not-found.tsx";
import SavesLayou from "./features/dashboard/components/layouts/saves-layout.tsx";
import TvseriesLayout from "./features/dashboard/components/layouts/tv-series-layout.tsx";
import "./index.css";
import SettingsPage from "./pages/settings-page.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: MainLayout },
      { path: "/movies", Component: MoviesLayout },
      { path: "/tvseries", Component: TvseriesLayout },
      { path: "/saves", Component: SavesLayou },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/settings",
    Component: SettingsPage,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);

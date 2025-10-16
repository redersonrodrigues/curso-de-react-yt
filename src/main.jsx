import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Erro na página principal!</div>,
  },
  {
    path: "/task",
    element: <TaskPage />,
    errorElement: <div>Erro na página da tarefa!</div>,
  },
  {
    path: "*",
    element: <div>Página não encontrada - 404</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

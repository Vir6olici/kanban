import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Board from "./pages/board/board";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/board",
    element: <Board />,
  },
]);

const App: React.FC = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};
export default App;

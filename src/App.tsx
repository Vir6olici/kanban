import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/login";
import Board from "./pages/board";
import boardMocks from "./mocks/board-mock";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/board",
    element: <Board data={boardMocks} />,
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

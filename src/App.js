import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./jsx/Nav.jsx";

import Restaurant from "./jsx/Restaurant.jsx";
import Body from "./jsx/Body.jsx";
import Class from "./jsx/Class.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import PageNotFound from "./jsx/PageNotFound.jsx";

// Ensure you're using the correct import for React 18

const App = () => {
  return (
    <>
      <Provider store={appStore}>
        <Nav />
        <Outlet />
      </Provider>
    </>
  );
};

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Nav />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />,
      },
      {
        path:"*",
        element: <PageNotFound/>
      }
    ],
  },
]);

// Assuming you are using React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoute} />);

// For React 17 and earlier versions, use the following:
// ReactDOM.render(<Welcome />, document.getElementById('root'));

import { createBrowserRouter } from "react-router";
import FrontLayout from "../components/Layout/FrontLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: FrontLayout,
  },
]);

export default router;

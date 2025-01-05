import { RouterProvider } from "react-router-dom";
import routes from "./router/RouteList";

function App() {
  return (
    <>
      {/* <AdminDashboardPage /> */}
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

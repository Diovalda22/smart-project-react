import { createBrowserRouter } from "react-router-dom";
import { SidebarMenu } from "../components/Sidebar";
import { ProductTable } from "../components/ProductTable";
import AdminDashboardPage from "../pages/AdminDasboardPage";
import { FormAddProduct } from "../components/FormAddProduct";
import { FormUpdateProduct } from "../components/FormUpdateProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <SidebarMenu />,
    children: [
      { path: "", element: <AdminDashboardPage /> },
      { path: "product", element: <ProductTable /> },
      { path: "product/add", element: <FormAddProduct /> },
      { path: "product/edit", element: <FormUpdateProduct /> },
    ],
  },
]);

export default routes;

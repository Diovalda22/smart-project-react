import { createBrowserRouter } from "react-router-dom";
import { SidebarMenu } from "../components/Sidebar";
import { ProductTable } from "../components/ProductTable";
import AdminDashboardPage from "../pages/AdminDasboardPage";
import { FormAddProduct } from "../components/FormAddProduct";
import { FormUpdateProduct } from "../components/FormUpdateProduct";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";

const routes = createBrowserRouter([
  {
    path: "/admin",
    element: <SidebarMenu />,
    children: [
      { path: "", element: <AdminDashboardPage /> },
      { path: "product", element: <ProductTable /> },
      { path: "product/add", element: <FormAddProduct /> },
      { path: "product/edit", element: <FormUpdateProduct /> },
    ],
  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
  },
]);

export default routes;

import { Edit } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import EditComponent from "../components/edit/EditComponent";
import EditServices from "./Pages/Services/EditServices";
import Dashboard from "./Pages/Dashboard";
import Layout from "./Pages/Layout";
import Login from "./Pages/Login";
import Services from "./Pages/Services/Services";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products/Products";
import EditProducts from "./Pages/Products/EditProducts";
import Categories from "./Pages/categories/Categories";
import EditCategory from "./Pages/categories/EditCategory";
import CategoryDetails from "./Pages/categories/CategoryDetails";
import EditSubCategory from "./Pages/categories/EditSubCategory";


export let Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <div>errorElement</div>,
  },
  {
    path: "/admin",
    element: <Layout />,
    errorElement: <div>errorElement</div>,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "services",
        element: <Services />,
        children: [
          { index: true, element: <Dashboard /> },
          {
            path: "edit-service",
            element: <EditServices />,
          },
        ],

      },
      {
        path: "products",
        element: <Products />,
      },
      {
        // path: "admin",
        // element: <Admin />,
        // loader: async (e) => {
        //   if (localStorage.AccessToken) {
        //   }
        //   return e
        // },
      },
    ],
  },

  // {
  //   path: "/services",
  //   element: <Layout />,
  //   errorElement: <div>errorElement</div>,
  //   children: [
  //     { index: true, element: <Dashboard /> },
  //     {
  //       path: "edit-service",
  //       element: <EditServices />,
  //     },
  //   ],
  // },
  
  {
    path: "/products",
    element: <Layout />,
    errorElement: <div>errorElement</div>,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "edit-product",
        element: <EditProducts />,
      },
    ],
  },
  {
    path: "categories",
    element: <Layout />,
    errorElement: <div>errorElement</div>,
    children: [
      { index: true, element: <Categories /> },
      {
        path: "editCategory/:catId",
        element: <EditCategory />,
      },
      {
        path: ":catId",
        element: <CategoryDetails />,
      },
      {
        path: ":catId/editSubCategory/:subcatId",
        element: <EditSubCategory />,
      },
      
    ],
  },
]);

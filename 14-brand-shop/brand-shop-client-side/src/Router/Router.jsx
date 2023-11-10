import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import AddBrand from "../components/Brand/AddBrand/AddBrand";
import AllBrand from "../components/Brand/AllBrand/AllBrand";
import BrandProductPage from "../components/Brand/BrandProductPage/BrandProductPage";
import UpdateBrand from "../components/Brand/UpdateBrand/UpdateBrand";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AllProduct from "../components/Products/AllProduct/AllProduct";
import AllProducts from "../components/Products/AllProducts/AllProducts";
import ProductDetails from "../components/Products/ProductDetails./ProductDetails";
import AddProduct from "../pages/AddProduct/AddProduct";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import MyCart from "../pages/MyCart/MyCart";
import Register from "../pages/Register/Register";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import PrivateRouter from "./PrivateRouter";
import AllProductBaseSlider from "../components/ProductBaseSlider/AllProductBaseSlider/AllProductBaseSlider";
import AddProductBaseSlider from "../components/ProductBaseSlider/AddProductBaseSlider/AddProductBaseSlider";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://brand-shop-server-one-bice.vercel.app/brand"),
      },
      {
        path: "/products",
        element: <AllProducts></AllProducts>,
        loader: () =>
          fetch("https://brand-shop-server-one-bice.vercel.app/products"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products/:id",
        element: <BrandProductPage></BrandProductPage>,
        loader: () =>
          fetch("https://brand-shop-server-one-bice.vercel.app/productbaseslider"),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRouter>
            <ProductDetails></ProductDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-one-bice.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <Dashboard></Dashboard>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/allproduct",
        element: <AllProduct></AllProduct>,
        loader: () =>
          fetch("https://brand-shop-server-one-bice.vercel.app/products"),
      },
      {
        path: "/dashboard/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-one-bice.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/dashboard/allbrand",
        element: <AllBrand></AllBrand>,
        loader: () =>
          fetch("https://brand-shop-server-one-bice.vercel.app/brand"),
      },
      {
        path: "/dashboard/updatebrand/:id",
        element: <UpdateBrand></UpdateBrand>,
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-one-bice.vercel.app/brand/${params.id}`
          ),
      },
      {
        path: "/dashboard/addbrand",
        element: <AddBrand></AddBrand>,
      },
      {
        path: '/dashboard/allproductbaseslider', 
        element: <AllProductBaseSlider></AllProductBaseSlider>, 
        loader: ()=> fetch('https://brand-shop-server-one-bice.vercel.app/productbaseslider')
      },
      {
        path: "/dashboard/addproductbaseslider",
        element: <AddProductBaseSlider></AddProductBaseSlider>,
      },
      {
        path: "/dashboard/mycart",
        element: (
          <PrivateRouter>
            <MyCart></MyCart>
          </PrivateRouter>
        ),
        loader: () =>
          fetch(`https://brand-shop-server-one-bice.vercel.app/mycart`),
      },
    ],
  },
]);
export default Router;

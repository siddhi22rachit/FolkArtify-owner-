import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Layout, RequireAuth } from "./routes/layout/layout";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import NewPost from "./routes/newPost/newPost";
import SinglePage from "./routes/singlePage/singlePage";
import About from "./routes/about/about";
import Login from "./routes/login/login";
import { listPageLoader, profilePageLoader, singlePageLoader } from "./lib/loaders";
import MultiStepForm from "./routes/multiStepForm/MultiStepForm";
import Success from "./routes/succes/success";
import ProfilePage from "./routes/profilePage/profilePage";
import Dashboard from "./routes/dashboard/Dashboard";
import SalesAndProfit from "./routes/dashboard/SalesAndProfit";
import RecentPurchases from "./routes/dashboard/RecentPurchases";
import ProductStats from "./routes/dashboard/ProductStats";
import QnA from "./routes/dashboard/QnA";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        }, {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },

        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        { path: "/register", element: <MultiStepForm /> },
        { path: "/success", element: <Success /> },
        {
          path:'/dashboard',
          element:<Dashboard/>,
          children:[
            {path:'sales', element:<SalesAndProfit/>},
            {path:'recent-purchases',element:<RecentPurchases/>},
            {path:'product-stats', element:<ProductStats/>},
            {path:'qna', element: <QnA/>}
          ]
        }
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
       
        {
          path: "/add",
          element: <NewPost />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;

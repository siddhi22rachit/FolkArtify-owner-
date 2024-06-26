import{createBrowserRouter, RouterProvider}from "react-router-dom";
import './App.css'
import Layout from './routes/layout/layout'
import HomePage from './routes/homePage/homePage'
import ListPage from './routes/listPage/listPage'
import NewPost from "./routes/newPost/newPost";
import SinglePage from "./routes/singlePage/singlePage";
import { listPageLoader, singlePageLoader } from "./lib/loaders";

function App() {
  const router= createBrowserRouter([
    {path:"/",
      element:<Layout/>,
    children:[
    {
    path:"/",
    element: <HomePage/>,
   },
   {
    path:"/list",
    element:<ListPage/>,
    loader: listPageLoader,
   },
  
   {
    path:"/add",
    element:<NewPost/>,
   },

   {
     path:"/:id",
     element:<SinglePage/>,
     loader: singlePageLoader,
   }

]}
]);

return(
  <RouterProvider router={router}/>)

}
export default App;

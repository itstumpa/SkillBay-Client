import { createBrowserRouter, Navigate } from "react-router";
import Login from "../Pages/Login/Login.jsx";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import MainLayouts from "../components/Layout/MainLayouts";
import Register from "../Pages/Register/Register.jsx";
import About from "../components/Footer/about.jsx"
// import SkillDetails from "../Pages/Home/Sections/SkillDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyProfile from "../Pages/MyProfile/MyProfile.jsx";
import AcceptedTask from "../Pages/AcceptedTask/AcceptedTask.jsx";
import AllJobs from "../Pages/AllJobs/AllJobs.jsx";
import AddAJob from "../Pages/AddAJob/AddAJob.jsx";
import JobDetails from "../Pages/Home/Sections/JobDetails.jsx";
import MyAddedJobs from "../Pages/MyAddedJobs/MyAddedJobs.jsx";
import Features from "../components/Footer/Features.jsx";
import Integrations from "../components/Footer/Integrations.jsx";
import Pricing from "../components/Footer/Pricing.jsx";
import FAQ from "../components/Footer/FAQ.jsx";
import Privacy from "../components/Footer/Privacy.jsx";
import Terms from "../components/Footer/Terms.jsx";
import API from "../components/Footer/API.jsx";
import Documentation from "../components/Footer/Documentation.jsx";
import DashboardLayout from "../components/Layout/DashBoardLayout.jsx";
import Dashboard from "../Pages/Dashboard/MyProfile/Dashboard.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    errorElement: <Error/>,
    children: [
      {
    index: true, 
    element: <Home/>,
  },
  {
    path: "/alljobs",
    element: <AllJobs />,
    
  },
  {
    path: "/jobdetails/:id",
    element: 

      <JobDetails />,
    
  },

  
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/myprofile",
    element: <PrivateRoute>

      <MyProfile />
    </PrivateRoute>
  },
  {
    path: "/about",
    element: <About />,
  },

 
         { path:"/features", element:<Features />},
         { path:"/integrations", element:<Integrations />},
         { path:"/pricing", element:<Pricing />},
         { path:"/faq", element:<FAQ />},
         { path:"/privacy", element:<Privacy />},
        { path:"/terms", element:<Terms />},
        {  path:"/api", element:<API /> },
        {  path:"/documentation", element:<Documentation /> },

    ],
  },


 // Dashboard routes
  {
    path: "dashboard", 
    element: (<PrivateRoute>{" "}<DashboardLayout></DashboardLayout>{" "} </PrivateRoute>),
    children: [

      // admin 
      // { path: "manage-users", element:<AdminRoute> <ManageUsers /> </AdminRoute>},
     {
    path: "add-job",
    element:  <AddAJob />
  },
     {
    path: "my-added-jobs",
    element:   <MyAddedJobs />
  },
     {
    path: "accepted-task",
    element: <AcceptedTask />
  },
      
      // manager 
      // { path: "add-loan", element:<ManagerRoute><AddLoan /></ManagerRoute>  },


      // users 
      { path: "my-profile", element:<MyProfile /> },
      { path: "/dashboard", element:<Dashboard /> },
    ],
  },





  
]);

export default router;
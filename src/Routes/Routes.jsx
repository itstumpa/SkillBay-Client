import { createBrowserRouter, Navigate } from "react-router";
import Login from "../Pages/Login/Login.jsx";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error";
import MainLayouts from "../components/Layout/MainLayouts";
import Register from "../Pages/Register/Register.jsx";
import About from "../components/Footer/about.jsx"
import PrivacyPolicy from "../components/Footer/PrivacyPolicy.jsx";
import SkillDetails from "../Pages/Home/Sections/SkillDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import MyProfile from "../Pages/MyProfile/MyProfile.jsx";
import AcceptedTask from "../Pages/AcceptedTask/AcceptedTask.jsx";
import AllJobs from "../Pages/AllJobs/AllJobs.jsx";
import AddAJob from "../Pages/AddAJob/AddAJob.jsx";
import JobDetails from "../Pages/Home/Sections/JobDetails.jsx";
import MyAddedJobs from "../Pages/MyAddedJobs/MyAddedJobs.jsx";

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
    element: <PrivateRoute>

      <JobDetails />,
    </PrivateRoute>
    
  },
  {
    path: "/addajob",
    element:  <PrivateRoute>

      <AddAJob />
    </PrivateRoute>
  },
  {
    path: "/myaddedjobs",
    element:  <PrivateRoute>

      <MyAddedJobs />
    </PrivateRoute>
  },
  {
    path: "/acceptedtask",
    element:  <PrivateRoute>

      <AcceptedTask />
    </PrivateRoute>
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
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
  
  
    ],
  },
  
]);

export default router;
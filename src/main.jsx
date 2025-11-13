import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import './index.css';
// import {  } from "react-router/dom";
import router from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { LoadingProvider } from './contexts/LoadingContext.jsx'
import { ThemeProvider } from 'next-themes'



createRoot(document.getElementById('root')).render(
  <StrictMode>
<ThemeProvider attribute="class" defaultTheme='light'>

     <AuthProvider>
     <RouterProvider router={router} />
     <ToastContainer />
  <LoadingProvider />
</AuthProvider>
</ThemeProvider>

  </StrictMode>,
)

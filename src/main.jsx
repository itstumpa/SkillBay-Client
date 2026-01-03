import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import './index.css';
import router from './Routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { LoadingProvider } from './contexts/LoadingContext.jsx'
import { ThemeProvider } from "./contexts/ThemeContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>

<ThemeProvider >


     <AuthProvider>
     <RouterProvider router={router} />
     <ToastContainer />
  <LoadingProvider />
</AuthProvider>
</ThemeProvider>

  </StrictMode>,
)

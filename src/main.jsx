import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './components/layout.jsx';
import App from './App.jsx';
import Contact from "./components/contact/contact.jsx";
import Career from "./components/career/career.jsx";
import Form from "./components/apply-form/form.jsx";

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <App />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/career',
        element: <Career />,
      },
      {
        path: 'form',
        element: <Form />,
      },
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

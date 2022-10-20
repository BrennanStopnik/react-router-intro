import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import ContactPage from './Pages/Contact';
import App from './App';
import SignUpsCard from './Components/SignUpCard';
import SignUpsPage from './Pages/SignUpPage';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

const router = createBrowserRouter([
  {  
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/signup",
        element: <SignUpsPage />,
        children: [
          {
            path: "/signup/:email",
            element: <SignUpsCard />
          }
        ]
      }
    ],
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



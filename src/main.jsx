import { StrictMode } from 'react'

import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router/dom";
import { router } from './Routes/routes.jsx';


import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);



// (document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './Components/Mainlayout.jsx';
import Home from './Components/Home.jsx';
import Treatment from './Components/Treatment.jsx';
import Profile from './Components/Profile.jsx';
import Appoinment from './Components/Appoinment.jsx';
import Details from './Components/Details.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
      path: '/',
      element: <Home></Home>,
      loader:async ()=> {
        const servicesRes =await fetch('/Services.json');
        const servicesData = await servicesRes.json()

        const feedbackRes = await fetch('/happyclients.json');
        const feedbackData = await feedbackRes.json()

        return {servicesData,feedbackData};
      }
      },
      {
        path: '/treatment',
        element: <Treatment></Treatment>,
        loader:()=> fetch('/Services.json')
      },
      {
        path: '/profile',
        element: <Profile></Profile>
      },
      {
        path:'/appointment',
        element: <Appoinment></Appoinment>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader:async({params}) =>{
          const res = await fetch('/Services.json')
          const data = await res.json()
          const singleData = data.find(d=>d.id==params.id)
    
          console.log(singleData);
          return singleData;


        }
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

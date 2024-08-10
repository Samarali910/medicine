 import React from 'react'
 import AboutMedicine from '../AboutMedicine'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from '../Layout/Layout';
 import AboutServices from '../AboutServices'
 import AboutPayment from '../AboutPayment'
 const FaqRoute = () => {
     
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<AboutMedicine/>}/>  
        <Route path='/services' element={<AboutServices/>}/>  
        <Route path='/payment' element={<AboutPayment/>}/> 
      </Route>
    )
  );
   
   return (
    <RouterProvider router={router}/>
   )
 }
 
 export default FaqRoute
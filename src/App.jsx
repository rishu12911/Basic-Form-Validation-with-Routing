import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css'; 
import Form from './Form';
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Submit from './Submit';


const App = () => {
  // const router=createBrowserRouter([

  //   { path:"/",
  //     element:<Form/>

  //   },
  //   {
  //     path:"/submit",
  //     element:<Submit/>
  //   }
    
  // ])
  const router=createBrowserRouter(
    createRoutesFromElements([
      <Route path='/' element={<Form/>}></Route>,
      <Route path='/submit' element={<Submit/>}></Route>
  ])
  );

  return (
    <>

    <RouterProvider router={router}/>
    
    </>
  );
};

export default App;


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/shared/Home';
import { Error } from './pages/shared/Error';
import { Login } from './pages/shared/Login';
import { Register } from './pages/shared/Register';
import { SharedLayout } from './Layouts/SharedLayout';
import { Sell } from './pages/shared/Sell';
import { Buy } from './pages/shared/Buy';
import { Rent } from './pages/shared/Rent';
import { Agent } from './pages/shared/Agent';

const App =()=> {
  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route element={<SharedLayout/>}>
               <Route path='/' element={<Home/>}/>
               <Route path='*' element={<Error/>}/>
               <Route path='/sell' element={<Sell/>}/>
               <Route path='/buy' element={<Buy/>}/>
               <Route path='/agent' element={<Agent/>}/>
               <Route path='/rent' element={<Rent/>}/>
               <Route path='/login' element={<Login/>}/>
               <Route path='/register' element={<Register/>}/>
            </Route>
          </Routes>
       </BrowserRouter>
    </>
  )

}

export default App;

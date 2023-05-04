import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { About } from './Components/About'
import { Home } from './Components/Home'
import { Contact } from './Components/Contact'
import { Navbar } from './Components/Navbar';
import { OrderSummary } from './Components/OrderSummary';
import { NoMatch } from './Components/NoMatch';
import { Products } from './Components/Products';
import { FeaturedProducts } from './Components/FeaturedProducts';
import { NewProducts } from './Components/NewProducts';
import { Users } from './Components/Users';
import { UserDetails } from './Components/UserDetails';
import { Admin } from './Components/Admin';
import { Profile } from './Components/Profile';
import { AuthProvider } from './Components/auth';
import { Login } from './Components/Login';
import { RequireAuth } from './Components/RequireAuth';
//import './App.css';

function App() {
  return (
    <AuthProvider>
    <Navbar />
    <Routes>
     <Route path='/' element={<Home /> } />
     <Route path='about' element={<About /> } />
     <Route path='contact' element={<Contact />} />
     <Route path='Order-Summary' element={<OrderSummary />} />
     <Route path="*" element={<NoMatch />} />
     <Route path='products' element={<Products />}>
      <Route path='featured' element={<FeaturedProducts />} />
      <Route path='new' element={<NewProducts />} />
     </Route>
     <Route path='users' element={<Users />} >
     <Route path=':userid' element={<UserDetails />} />
     <Route path='admin' element={<Admin />} />
     </Route>
     <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
     <Route path='login' element={<Login />} />
    </Routes>
    </AuthProvider>
  );
}

export default App;

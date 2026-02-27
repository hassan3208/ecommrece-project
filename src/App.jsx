// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { orderPage as OrderPage } from './orderPage';
import { TrackingPage } from './TrackingPage';
import { CheckOut } from './CheckOut';


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
      <Route path="/checkout" element={<CheckOut />} />
    </Routes>
  )
}

export default App

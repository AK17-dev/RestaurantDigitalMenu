import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import MenuItemDetail from './pages/MenuItemDetail'
import OrderTracking from './pages/OrderTracking'
import CartPage from './pages/CartPage'

export default function App() {
    return (
        <>
            <Navbar />
            <main className="container my-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/menu/:id" element={<MenuItemDetail />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/orders" element={<OrderTracking />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

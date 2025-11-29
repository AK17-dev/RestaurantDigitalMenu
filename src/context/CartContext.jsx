import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}

function uid() {
    return Math.random().toString(36).slice(2, 9)
}

export function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        try {
            const raw = localStorage.getItem('cart')
            return raw ? JSON.parse(raw) : []
        } catch {
            return []
        }
    })

    const [orders, setOrders] = useState(() => {
        try {
            const raw = localStorage.getItem('orders')
            return raw ? JSON.parse(raw) : []
        } catch {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    function addToCart(item, qty = 1) {
        setCart(prev => {
            const found = prev.find(i => i.id === item.id)
            if (found) {
                return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i)
            }
            return [...prev, { ...item, qty }]
        })
    }

    function removeFromCart(id) {
        setCart(prev => prev.filter(i => i.id !== id))
    }

    function clearCart() {
        setCart([])
    }

    function placeOrder(customer = { name: 'Guest' }) {
        if (cart.length === 0) return null
        const newOrder = {
            id: uid(),
            createdAt: new Date().toISOString(),
            status: 'Received',
            customer,
            items: cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price }))
        }
        setOrders(prev => [newOrder, ...prev])
        clearCart()
        return newOrder
    }

    function updateOrderStatus(orderId, status) {
        setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o))
    }

    const value = {
        cart,
        orders,
        addToCart,
        removeFromCart,
        clearCart,
        placeOrder,
        updateOrderStatus
    }

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

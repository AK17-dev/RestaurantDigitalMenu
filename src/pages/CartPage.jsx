import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function CartPage() {
    const { cart, removeFromCart, placeOrder } = useCart()
    const [name, setName] = useState('')
    const [placed, setPlaced] = useState(null)

    function handlePlace() {
        const order = placeOrder({ name: name || 'Guest' })
        setPlaced(order)
    }

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <div className="alert alert-info">Cart is empty</div>
            ) : (
                <div>
                    <ul className="list-group mb-3">
                        {cart.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <strong>{item.name}</strong> <div className="text-muted">{item.qty} x ${item.price.toFixed(2)}</div>
                                </div>
                                <div>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mb-3">
                        <label className="form-label">Your name</label>
                        <input className="form-control" value={name} onChange={e => setName(e.target.value)} placeholder="Optional" />
                    </div>

                    <button className="btn btn-success" onClick={handlePlace}>Place Order</button>
                </div>
            )}

            {placed && (
                <div className="alert alert-success mt-3">
                    Order placed! ID: <strong>{placed.id}</strong>
                </div>
            )}
        </div>
    )
}

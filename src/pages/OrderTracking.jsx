import React from 'react'
import { useCart } from '../context/CartContext'

export default function OrderTracking() {
    const { orders, updateOrderStatus } = useCart()

    function advance(order) {
        const next = order.status === 'Received' ? 'Preparing' : order.status === 'Preparing' ? 'Out for delivery' : 'Delivered'
        updateOrderStatus(order.id, next)
    }

    return (
        <div>
            <h2>Order Tracking</h2>
            {orders.length === 0 ? (
                <div className="alert alert-info">No orders placed yet.</div>
            ) : (
                <div className="list-group">
                    {orders.map(o => (
                        <div key={o.id} className="list-group-item">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <strong>Order</strong> #{o.id} <div className="text-muted">{new Date(o.createdAt).toLocaleString()}</div>
                                    <div className="mt-2">Customer: {o.customer?.name}</div>
                                    <ul>
                                        {o.items.map(it => <li key={it.id}>{it.name} x {it.qty}</li>)}
                                    </ul>
                                </div>
                                <div className="text-end">
                                    <div className="mb-2"><span className="badge bg-secondary">{o.status}</span></div>
                                    <button className="btn btn-sm btn-outline-primary" onClick={() => advance(o)}>Advance status</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

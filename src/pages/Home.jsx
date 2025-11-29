import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Welcome to Our Restaurant</h1>
                    <p className="col-md-8 fs-4">Order delicious meals online and track your orders in real-time.</p>
                    <Link to="/menu" className="btn btn-primary btn-lg">View Menu</Link>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h3>Why choose us?</h3>
                    <ul>
                        <li>Fresh ingredients</li>
                        <li>Fast delivery</li>
                        <li>Easy online ordering</li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>Highlights</h3>
                    <p>Order Now.</p>
                </div>
            </div>
        </div>
    )
}

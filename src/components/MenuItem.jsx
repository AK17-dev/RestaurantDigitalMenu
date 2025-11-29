import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuItem({ item, onAdd }) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted">{item.description}</p>
                    <div className="mt-auto d-flex justify-content-between align-items-center">
                        <div>
                            <strong>${item.price.toFixed(2)}</strong>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-outline-primary me-2" onClick={() => onAdd(item)}>Add</button>
                            <Link to={`/menu/${item.id}`} className="btn btn-sm btn-secondary">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import m1 from '../assets/m1.webp'
import m2 from '../assets/m2.webp'
import m3 from '../assets/m3.jpg'
import m4 from '../assets/m4.jpg'
import m5 from '../assets/m5.webp'

const SAMPLE_MENU = [
    { id: 'm1', name: 'Margherita Pizza', description: 'Classic cheese & tomato', price: 9.99, image: m1 },
    { id: 'm2', name: 'Pepperoni Pizza', description: 'Pepperoni & mozzarella', price: 11.99, image: m2 },
    { id: 'm3', name: 'Caesar Salad', description: 'Crisp romaine, parmesan, croutons', price: 7.5, image: m3 },
    { id: 'm4', name: 'Spaghetti Bolognese', description: 'Rich meat sauce with pasta', price: 12.0, image: m4 },
    { id: 'm5', name: 'Dynamic burger', description: 'Coffee-flavored Italian dessert', price: 6.25, image: m5 }
]

export default function MenuItemDetail() {
    const { id } = useParams()
    const item = SAMPLE_MENU.find(i => i.id === id)
    const { addToCart } = useCart()

    if (!item) return <div>Item not found</div>

    return (
        <div className="row">
            <div className="col-md-6">
                <img src={item.image} alt={item.name} className="img-fluid rounded" />
            </div>
            <div className="col-md-6">
                <h2>{item.name}</h2>
                <p className="text-muted">{item.description}</p>
                <h4>${item.price.toFixed(2)}</h4>
                <button className="btn btn-primary" onClick={() => addToCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

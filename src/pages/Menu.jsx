import React from 'react'
import MenuItem from '../components/MenuItem'
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

export default function Menu() {
    const { addToCart } = useCart()
    return (
        <div>
            <h2>Menu</h2>
            <div className="row">
                {SAMPLE_MENU.map(item => (
                    <MenuItem key={item.id} item={item} onAdd={() => addToCart(item)} />
                ))}
            </div>
        </div>
        
    )
}

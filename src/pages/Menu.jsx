import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import { useCart } from "../context/CartContext";

export default function Menu() {
    const { addToCart } = useCart();

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadMenu() {
            try {
                const res = await fetch("http://localhost:3000/api/products");
                const data = await res.json();

                // Convert DB rows to the shape your UI expects
                const mapped = data.map((p) => ({
                    id: String(p.id),
                    name: p.name,
                    description: p.description || "",
                    price: Number(p.price),
                    image: p.image_url || "", // MenuItem should render <img src={item.image} />
                }));

                setMenu(mapped);
            } catch (e) {
                console.error("Failed to load menu:", e);
            } finally {
                setLoading(false);
            }
        }

        loadMenu();
    }, []);

    if (loading) return <div>Loading menu...</div>;

    return (
        <div>
            <h2>Menu</h2>
            <div className="row">
                {menu.map((item) => (
                    <MenuItem key={item.id} item={item} onAdd={() => addToCart(item)} />
                ))}
            </div>
        </div>
    );
}


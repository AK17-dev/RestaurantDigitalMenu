import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-light text-center py-4 mt-4">
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} Restaurant Ordering System</p>
            </div>
        </footer>
    )
}

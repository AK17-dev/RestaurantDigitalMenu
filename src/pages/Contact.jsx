import React, { useState } from 'react'

export default function Contact() {
    const [sent, setSent] = useState(false)
    return (
        <div>
            <h2>Contact Us</h2>
            {sent ? (
                <div className="alert alert-success">Thanks! We'll get back to you soon.</div>
            ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input className="form-control" type="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows={4} required />
                    </div>
                    <button className="btn btn-primary">Send</button>
                </form>
            )}
        </div>
    )
}

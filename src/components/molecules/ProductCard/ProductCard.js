import React from 'react'
import './ProductCard.css'

export default function ProductCard({ product }) {
    return <div className="ProductCard">{product.name}</div>
}

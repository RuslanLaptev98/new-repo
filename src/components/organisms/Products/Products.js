import React from 'react'
import './Products.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import ProductCard from '../../molecules/ProductCard/ProductCard'

export default function Products({ products }) {
    return (
        <div className="Products">
            <SectionTitle title="Товары" />
            <dit className="Products__content">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </dit>
        </div>
    )
}

import { useEffect, useState } from 'react'
import { Product } from '../../types/Product'
import { fetchProducts } from '../../services/productService'
import ProductCard from '../ProductCard/ProductCard'

import './ProductList.css'

export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [searchTerm, setSearchTerm] = useState<string>('')

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productsData = await fetchProducts()
                setProducts(productsData)
            } catch (error) {
                setError('Failed to load product list.')
            } finally {
                setLoading(false)
            }
        }

        getProducts()
    }, [])

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )

    const getTrendingProducts = findTrendingProducts(products)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="container">
            <h1>Products</h1>

            <div className="trending-search-container">
                <div className="trending-product">
                    <b>Trending product:</b>
                    {getTrendingProducts.map((product) => (
                        <p>{product.title}</p>
                    ))}
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="product-list">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </div>
    )
}

const findTrendingProducts = (products: Product[]) => {
    const highestRating = Math.max(...products.map((product) => product.rating))

    return products.filter((product) => product.rating === highestRating)
}

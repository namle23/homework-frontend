import './ProductCard.css'
import { Product } from '../../types/Product'

type ProductCardProps = {
    product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card">
            <h2>{product.title}</h2>
            <p>{product.brand}</p>
            <p className="price">{product.price}€</p>
        </div>
    )
}

export default ProductCard

import ProductItem from "./ProductItem";
import './components.css';

function ProductList({ products }) {
    return (
        <div className="products-container">
            <h1>Product List Component</h1>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductList;
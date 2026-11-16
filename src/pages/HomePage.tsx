import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

function HomePage() {
  return (
    <>
      <h1 className="mb-8 text-center text-4xl font-extrabold">My Product</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default HomePage

import { Link } from 'react-router'
import type { Product } from '../types'
import { useCartStore } from '../stores/useCartStore'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCartStore()
  const { id, image, name, description, price } = product

  return (
    <div className="card bg-base-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <Link to={`/product/${id}`}>
        <figure className="h-100 overflow-hidden">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </figure>
      </Link>

      <div className="card-body gap-1 p-4">
        <h2 className="card-title text-base">
          <Link to={`/product/${id}`} className="hover:text-pink-500">
            {name}
          </Link>
        </h2>
        <p className="line-clamp-2 min-h-10 text-xs text-base-content/60">{description}</p>

        <div className="card-actions mt-2 items-center justify-between">
          <span className="text-lg font-bold text-pink-400">
            ฿{price.toLocaleString('th-TH')}
          </span>
          <button
            className="btn border-none bg-pink-500 text-white hover:bg-pink-600"
            onClick={() => addToCart(product)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

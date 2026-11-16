import { Link, useParams } from 'react-router'
import { products } from '../data/products'
import { useCartStore } from '../stores/useCartStore'

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { addToCart } = useCartStore()

  
  const product = products.find((item) => item.id === Number(id))

  if (!product) {
    return (
      <div className="card mx-auto max-w-lg bg-base-100 shadow-md">
        <div className="card-body items-center gap-3 py-16 text-center">
          <h1 className="text-2xl font-extrabold">ไม่พบสินค้า</h1>
          <p className="text-base-content/60">ไม่มีสินค้ารหัส “{id}” ในระบบ</p>
          <Link to="/" className="btn border-none bg-pink-500 text-white hover:bg-pink-600">
            กลับหน้าแรก
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl">
      <Link to="/" className="mb-4 inline-block text-sm font-semibold hover:text-pink-500">
        ← กลับไปหน้าสินค้า
      </Link>

      <div className="card overflow-hidden bg-base-100 shadow-md md:card-side">
        <figure className="md:w-1/2">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
        </figure>

        <div className="card-body justify-between gap-6 md:w-1/2">
          <div>
            <h1 className="text-3xl font-extrabold">{product.name}</h1>
            <p className="mt-2 text-sm text-base-content/70">{product.description}</p>
          </div>

          <div>
            <div className="mb-3 text-3xl font-extrabold text-pink-500">
              ฿{product.price.toLocaleString('th-TH')}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                className="btn border-none bg-pink-500 text-white hover:bg-pink-600"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-outline">
                ไปที่ตะกร้า
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage

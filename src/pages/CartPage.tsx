import Cart from '../components/Cart'
import { useCartStore } from '../stores/useCartStore'

function CartPage() {
  const { cart } = useCartStore()

  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="mb-6 flex items-center justify-center gap-3 text-center text-4xl font-extrabold">
        Product Cart
        {cart.length > 0 && (
          <span className="badge badge-lg border-none bg-pink-500 text-white">
            {cart.length} รายการ
          </span>
        )}
      </h1>
      <Cart />
    </section>
  )
}

export default CartPage

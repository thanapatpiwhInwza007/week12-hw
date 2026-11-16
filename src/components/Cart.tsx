import { Link } from 'react-router'
import { useCartStore } from '../stores/useCartStore'
import CartItemRow from './CartItemRow'
import CartSummary from './CartSummary'

function Cart() {
  const { cart, clearCart } = useCartStore()

  const handleCheckout = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.amount, 0)
    alert(`ชำระเงินเรียบร้อยแล้ว ยอดชำระ ฿${total.toLocaleString('th-TH')}`)
    clearCart()
  }

  if (cart.length === 0) {
    return (
      <div className="card bg-base-100 shadow-md">
        <div className="card-body items-center gap-3 py-16 text-base-content/60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <p>
            กรุณาเลือก <span className="font-semibold text-base-content">Product</span>
          </p>
          <Link to="/" className="btn border-none bg-pink-500 text-white hover:bg-pink-600">
            ไปเลือกสินค้า
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body gap-4">
        <div className="divide-y divide-base-300">
          {cart.map((item) => (
            <CartItemRow key={item.id} item={item} />
          ))}
        </div>

        <CartSummary />

        <button
          className="btn w-full border-none bg-pink-500 text-white hover:bg-pink-600"
          onClick={handleCheckout}
        >
          ชำระเงิน
        </button>
      </div>
    </div>
  )
}

export default Cart

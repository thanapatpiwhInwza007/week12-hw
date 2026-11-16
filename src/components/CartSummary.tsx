import { useCartStore } from '../stores/useCartStore'

function CartSummary() {
  const { cart } = useCartStore()
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.amount, 0)

  return (
    <div className="flex items-end justify-between border-t border-base-300 pt-4">
      <span className="text-sm text-base-content/70">
        รวมทั้งหมด {totalAmount.toLocaleString('th-TH')} ชิ้น
      </span>
      <div className="text-right">
        <div className="text-xs text-base-content/60">Total Price</div>
        <div className="text-2xl font-extrabold text-pink-500">
          ฿{totalPrice.toLocaleString('th-TH')}
        </div>
      </div>
    </div>
  )
}

export default CartSummary

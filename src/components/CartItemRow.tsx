import type { CartItem } from '../types'
import { useCartStore } from '../stores/useCartStore'

interface CartItemRowProps {
  item: CartItem
}

function CartItemRow({ item }: CartItemRowProps) {
  const { changeAmount, removeFromCart } = useCartStore()

  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-4">
      <div className="flex flex-1 items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="h-20 w-20 shrink-0 rounded-lg object-cover"
        />
        <div className="min-w-0">
          <h3 className="font-bold">{item.name}</h3>
          <p className="line-clamp-1 text-xs text-base-content/60">{item.description}</p>
          <span className="text-sm font-semibold text-pink-500">
            ฿{item.price.toLocaleString('th-TH')}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn btn-circle btn-sm"
          aria-label="ลดจำนวน"
          disabled={item.amount <= 1}
          onClick={() => changeAmount(item.id, item.amount - 1)}
        >
          −
        </button>
        <input
          type="number"
          min={1}
          value={item.amount}
          aria-label={`จำนวน ${item.name}`}
          className="input input-bordered input-sm w-16 text-center"
          onFocus={(e) => e.target.select()}
          onChange={(e) => changeAmount(item.id, Number(e.target.value))}
        />
        <button
          className="btn btn-circle btn-sm"
          aria-label="เพิ่มจำนวน"
          onClick={() => changeAmount(item.id, item.amount + 1)}
        >
          +
        </button>
      </div>

      <div className="flex items-center justify-between gap-3 sm:w-40 sm:justify-end">
        <span className="text-lg font-bold">
          ฿{(item.price * item.amount).toLocaleString('th-TH')}
        </span>
        <button
          className="btn btn-ghost btn-sm btn-square text-error"
          aria-label={`ลบ ${item.name}`}
          onClick={() => removeFromCart(item.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CartItemRow

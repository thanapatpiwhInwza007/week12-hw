import { NavLink } from 'react-router'
import { useCartStore } from '../stores/useCartStore'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-1 border-b-2 px-1 py-1 text-sm font-semibold transition ${
    isActive
      ? 'border-pink-500 text-pink-500'
      : 'border-transparent text-base-content/70 hover:text-pink-400'
  }`

function Navbar() {
  const { cart } = useCartStore()

  return (
    <header className="sticky top-0 z-10 bg-base-100 shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <NavLink to="/" className="text-lg font-extrabold">
          My Shop <span className="text-pink-500">Mr.Thanapat</span>
        </NavLink>

        <div className="flex items-center gap-5">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart
            {cart.length > 0 && (
              <span className="badge badge-sm border-none bg-pink-500 text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

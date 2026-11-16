import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center gap-2 py-20 text-center">
      <h1 className="text-8xl font-extrabold text-pink-500">404</h1>
      <h2 className="text-xl font-bold">Page Not Found</h2>
      <p className="mb-4 text-xs text-base-content/60">ไม่พบหน้าที่คุณต้องการ</p>
      <Link to="/" className="btn border-none bg-pink-500 text-white hover:bg-pink-600">
        กลับหน้าแรก
      </Link>
    </div>
  )
}

export default NotFoundPage

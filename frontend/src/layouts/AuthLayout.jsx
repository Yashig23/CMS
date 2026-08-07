import { Link, Outlet } from "react-router-dom"
import { ROUTES } from "../constants/routes"

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <header className="px-6 py-6">
        <Link to={ROUTES.HOME} className="text-xl font-bold tracking-tight text-white">
          Launch<span className="text-indigo-400">Pad</span>
        </Link>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-16">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

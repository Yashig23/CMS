import { Link, NavLink, Outlet } from "react-router-dom"
import { ROUTES } from "../constants/routes"

const sidebarLinks = [
  { to: ROUTES.CUSTOMER.DASHBOARD, label: "Dashboard" },
  { to: ROUTES.CUSTOMER.BOOKINGS, label: "Bookings" },
  { to: ROUTES.CUSTOMER.MENU, label: "Menu" },
]

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      <aside className="hidden w-64 flex-col border-r border-white/10 bg-slate-900/50 md:flex">
        <div className="border-b border-white/10 px-6 py-5">
          <Link to={ROUTES.HOME} className="text-lg font-bold text-white">
            Launch<span className="text-indigo-400">Pad</span>
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {sidebarLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-2.5 text-sm transition ${
                  isActive
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h1 className="text-lg font-semibold text-white">Customer Portal</h1>
          <Link to={ROUTES.HOME} className="text-sm text-slate-400 transition hover:text-white">
            Back to site
          </Link>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

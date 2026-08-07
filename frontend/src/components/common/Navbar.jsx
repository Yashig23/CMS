import { Link, NavLink } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

const navLinks = [
  { to: ROUTES.HOME, label: "Home", end: true },
  { to: ROUTES.ABOUT, label: "About" },
  { to: ROUTES.CONTACT, label: "Contact" },
]

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to={ROUTES.HOME} className="text-xl font-bold tracking-tight text-white">
          Launch<span className="text-indigo-400">Pad</span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {navLinks.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                  isActive ? "text-white" : "transition hover:text-white"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to={ROUTES.AUTH.LOGIN}
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400"
        >
          Get Started
        </Link>
      </nav>
    </header>
  )
}

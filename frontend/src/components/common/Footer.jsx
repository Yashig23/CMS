import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
        <p>&copy; {new Date().getFullYear()} LaunchPad. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to={ROUTES.ABOUT} className="transition hover:text-slate-300">
            About
          </Link>
          <Link to={ROUTES.CONTACT} className="transition hover:text-slate-300">
            Contact
          </Link>
          <a href="https://github.com" className="transition hover:text-slate-300">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

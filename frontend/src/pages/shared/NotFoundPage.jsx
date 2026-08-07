import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
      <p className="mb-8 text-lg text-slate-400">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        to={ROUTES.HOME}
        className="rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-indigo-400"
      >
        Back to Home
      </Link>
    </section>
  )
}

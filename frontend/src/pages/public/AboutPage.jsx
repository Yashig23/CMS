import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

export default function AboutPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">About LaunchPad</h1>
        <p className="mb-6 text-lg leading-relaxed text-slate-400">
          LaunchPad is a monorepo starter with a React frontend and Express backend.
          It includes routing, shared layouts, and Tailwind CSS out of the box so you
          can focus on building features instead of wiring up boilerplate.
        </p>
        <p className="mb-10 text-lg leading-relaxed text-slate-400">
          The frontend uses Vite for fast development, React Router for navigation,
          and a reusable layout system with a navbar and footer shared across pages.
        </p>
        <Link
          to={ROUTES.CONTACT}
          className="inline-block rounded-xl bg-indigo-500 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-indigo-400"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}

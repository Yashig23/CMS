import { Link } from "react-router-dom"
import { ROUTES } from "../../constants/routes"

export default function RegisterPage() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h1 className="mb-2 text-2xl font-bold text-white">Create account</h1>
      <p className="mb-8 text-sm text-slate-400">Get started with LaunchPad</p>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Full name"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-500 py-3 font-semibold text-white transition hover:bg-indigo-400"
        >
          Create Account
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <Link to={ROUTES.AUTH.LOGIN} className="text-indigo-400 hover:text-indigo-300">
          Sign in
        </Link>
      </p>
    </div>
  )
}

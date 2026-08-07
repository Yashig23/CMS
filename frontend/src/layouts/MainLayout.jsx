import { Outlet } from "react-router-dom"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

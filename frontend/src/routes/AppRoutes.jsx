import { Route, Routes } from "react-router-dom"
import { ROLES } from "../constants/roles"
import AuthLayout from "../layouts/AuthLayout"
import DashboardLayout from "../layouts/DashboardLayout"
import MainLayout from "../layouts/MainLayout"
import AdminDashboardPage from "../pages/admin/AdminDashboardPage"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import BookingsPage from "../pages/customer/BookingsPage"
import CustomerDashboardPage from "../pages/customer/CustomerDashboardPage"
import MenuPage from "../pages/customer/MenuPage"
import AboutPage from "../pages/public/AboutPage"
import ContactPage from "../pages/public/ContactPage"
import HomePage from "../pages/public/HomePage"
import NotFoundPage from "../pages/shared/NotFoundPage"
import ProtectedRoute from "./ProtectedRoute"
import RoleBasedRoute from "./RoleBasedRoute"

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Auth routes */}
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      {/* Customer routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="customer" element={<DashboardLayout />}>
          <Route
            element={<RoleBasedRoute allowedRoles={[ROLES.CUSTOMER, ROLES.ADMIN]} />}
          >
            <Route path="dashboard" element={<CustomerDashboardPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="menu" element={<MenuPage />} />
          </Route>
        </Route>
      </Route>

      {/* Admin routes */}
      <Route element={<ProtectedRoute />}>
        <Route
          element={<RoleBasedRoute allowedRoles={[ROLES.ADMIN]} />}
        >
          <Route path="admin/dashboard" element={<AdminDashboardPage />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

import { Navigate, Outlet } from "react-router-dom"
import { ROUTES } from "../constants/routes"
import { useAuth } from "../context/AuthContext"

export default function RoleBasedRoute({ allowedRoles }) {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />
  }

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to={ROUTES.HOME} replace />
  }

  return <Outlet />
}

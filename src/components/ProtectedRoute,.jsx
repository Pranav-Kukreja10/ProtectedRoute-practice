import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute() {
    // const isLoggedIn = localStorage.getItem("isLogin") === "true"

    // return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />

    const isLoggedIn = localStorage.getItem("isLogin") === "true"; 

    if (isLoggedIn){
        return <Outlet></Outlet>
    }
    else {
        return  <Navigate to="/login" replace></Navigate>
    }
}
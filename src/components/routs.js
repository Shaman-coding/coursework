import Admin from "./Admin/Admin"
import Auth from "./auth/auth"
import Busket from "./busket/busket"
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/const"

export const authRouts = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Busket
    },
    
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Admin
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        // path: DIVICE_ROUTE + '/:id',
        // Component: Busket
    },
]

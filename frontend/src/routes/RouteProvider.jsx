import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(()=> import ("../pages/Home"))

const Products = lazy(()=> import ("../pages/Products"))

const publicRoutes = [
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Home />
            </Suspense>
        ),
    },
    {
        path:"/products",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Products />
            </Suspense>
        )
    }
]

// const privateRoutes = {

// }


const RouteProvider = () => {
    const router = createBrowserRouter(publicRoutes);

    return (
        <RouterProvider router={router} />
    );
};

export default RouteProvider;
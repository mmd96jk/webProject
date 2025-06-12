import IndexApp from './pages/IndexApp/IndexApp'
import Products from './pages/Products/Products'
import Categories from './pages/Categories/Categories'
import Category from './pages/Categories/Category'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import UserCart from './pages/UserCart/UserCart'


const routes = [
    { path: '/', element: <IndexApp /> },
    { path: 'products' , element: <Products /> },
    { path: 'categories' , element: <Categories />},
    { path: 'categories/:url', element: <Category /> },
    { path: 'about' , element: <About /> },
    { path: 'login' , element: <Login /> },
    { path: 'signup' , element: <Signup /> },
    { path: 'cart' , element: <UserCart /> },
]

export default routes
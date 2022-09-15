import { Navigate, Routes, Route } from 'react-router-dom'
import './darkly.css'
import Nav from './components/Nav'
import Products from './components/Products'
import AllProducts from './pages/AllProducts'
import EditProduct from './pages/EditProduct'
import NewProduct from './pages/NewProduct'
import ShowProduct from './pages/ShowProduct'


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/'} element={<Navigate to='/products' />} />
        <Route path={'/products'} element={<Products />} >
          <Route index element={<AllProducts />} />
          <Route path=':id' element={<ShowProduct />} />
          <Route path='new' element={<NewProduct />} />
          <Route path=':id/edit' element={<EditProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
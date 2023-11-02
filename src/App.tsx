import * as React from 'react'
import { Route, Routes } from '../node_modules/react-router-dom/dist/index'
import Catalog from './Components/Catalog'
import CategorySingle from './Pages/CategorySingle'
import Home from './Pages/Home/index'
import { shadekoApi } from './RTK_Query'
import Header from './Components/Header'
import './Sass/index.scss'
import Login from './Pages/Login'
import Favorites from './Pages/Favorites'
import Footer from './Components/Footer'
import ProductSingle from './Pages/ProductSingle'

function App (): JSX.Element {
  const { data: category, error, isLoading } = shadekoApi.useGetCategoriesQuery('categories')
  return (
<div className="wrapper">
    <Header />
    <main style={{ width: '100%' }}>
      <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/favorites' element={<Favorites />} />

          <Route path='/:category/:subcategory' element={<Catalog />} />
          <Route path='/product/:title/:id' element={<ProductSingle />} />

          {
            (!isLoading && (error == null)) &&
            category?.data?.map((e, i) =>
                <Route key={'route' + e?.id + i} path={'/' + e.attributes?.url} element={<CategorySingle />} />
            )
        }
      </Routes>
    </main>
  <Footer />
</div>
  )
}

export default App

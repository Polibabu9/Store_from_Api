import {Routes, Route} from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import ProductList from './Components/ProductList';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/product/:id'element={<ProductDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App

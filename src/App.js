
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/LandingPage'
import Tentang from './components/Tentang/Tentang';
import Hubungi from './components/Hubungi';
import Usaha from './components/UsahaJasa/Usaha';
import Product from './components/product/Product';
import Market from './components/Article/Market';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path='/tentang'element={<Tentang/>}></Route>
        <Route path='/hubungi'element={<Hubungi/>}></Route>
        <Route path='/usahadanjasa'element={<Usaha/>}></Route>
        <Route path='/belanja'element={<Market/>}></Route>
        <Route path='/Product'element={<Product/>}></Route>
      </Routes>
      </div>
  );
}

export default App;

// App.js
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/LandingPage'
import Usaha from './components/UsahaJasa/Usaha';
import Market from './components/UMKM/Market';
import Tujuan from './components/Tentang/Usaha';
import DetailUsaha from './DetailUsaha/DetailUsaha';


function App() {
  return (
    <div className="app bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/wisata' element={<Usaha />} />
        <Route path='/belanja/:id' element={<Market />} />
        <Route path='/belanja/' element={<DetailUsaha />} />
      </Routes>
    </div>
  );
}

export default App;

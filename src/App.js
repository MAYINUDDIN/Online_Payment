
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Notfound from './Pages/NotFound/Notfound';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar className='px-12'></Navbar>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>Home</Route>
        <Route path='*' element={<Notfound />}>Home</Route>
      </Routes>


    </div>
  );
}

export default App;

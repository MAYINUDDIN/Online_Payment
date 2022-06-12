
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home/Home';
import Notfound from './Pages/NotFound/Notfound';
import PaymentOverview from './Pages/Pay_channel/PaymentOverview';
import Pay_Channel from './Pages/Pay_channel/Pay_Channel';
import PolicyStatement from './Pages/PolicyStatement/PolicyStatement';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar className='px-12'></Navbar>
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>Home</Route>
        <Route path='/policy_details' element={<PolicyStatement />}>PolicyStatement</Route>
        <Route path='/payment_channel' element={<Pay_Channel />}>Pay Channel</Route>
        <Route path='/payment_overview' element={<PaymentOverview />}>Pay Channel</Route>

        <Route path='/contact_us' element={<ContactUs />}>Pay Channel</Route>
        <Route path='*' element={<Notfound />}>Home</Route>
      </Routes>


    </div>
  );
}

export default App;

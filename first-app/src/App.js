import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Transfer from '../src/Pages/Feature/Transfer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;


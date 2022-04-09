import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Transfer from '../src/Pages/feature/Transfer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="transfer" element={<Transfer />} />
    </Routes>
  );
}

export default App;


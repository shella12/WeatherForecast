import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1>Weather App</h1>
        <NavLink to="/" activeclassname="active">Home</NavLink>
        <NavLink to="/todos" >Sign Up</NavLink>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

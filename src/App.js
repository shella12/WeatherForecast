import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Favorite from './pages/Favourites';
import UserAuthContextProvider from "./context/UseAuthContex";
import ProtectedRoute from './components/ProtectedRote';
import Details from './pages/Details';
import FavList from './components/FavList';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Details/:id" element={<Details />} />
        <Route path='/Favourite' element={
                  <ProtectedRoute>
                    <Favorite />
                  </ProtectedRoute>
                } />
        <Route path='/Favourite/FavList/:dt_text' element={
                  <ProtectedRoute>
                    <FavList />
                  </ProtectedRoute>
                } />
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import {Routes,Route} from 'react-router-dom'
// import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useEffect } from 'react';
import {loadUser} from './actions/user'

import { useDispatch, useSelector } from 'react-redux';
import Forgot from './pages/Forgot';
import Reset from './pages/Reset';
import Playlist from './pages/playlists/Playlist';
import Album from './pages/albums/Album';
import Song from "./pages/songs/Song"
import Player from './pages/songs/Player';


function App() {
  const dispatch=useDispatch();

  const {isAuthenticated}=useSelector((state)=> state.user)
  const {activeSong}=useSelector(state=> state.songs)

  useEffect(()=> {
    dispatch(loadUser());
  },[dispatch])


  return (
    <>
      {isAuthenticated && <Navbar />}

      <Routes>
        <Route path='/' element={isAuthenticated ? <Home />: <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/search' element={isAuthenticated ?<Search />: <Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={isAuthenticated ?<Dashboard />:<Login />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/resetPassword/:resetToken' element={<Reset />} />
        <Route path='/playlist/:id' element={isAuthenticated && <Playlist />} />
        <Route path='/album/:id' element={isAuthenticated && <Album />} />
        <Route path='/player/:id' element={isAuthenticated && <Song />} />
      </Routes>

      {
        activeSong && <Player song={activeSong} />
      }
    </>
  );
}

export default App;

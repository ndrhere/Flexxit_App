import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Netflix from './pages/Netflix';
import Signup from './pages/Signup';
import Player from './pages/Player';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import UserListedMovies from './pages/UserListedMovies';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path="/signup" element={< Signup />}/>
      <Route exact path="/Player" element={< Player />}/>
      <Route exact path="/Movies" element={< Movies />}/>
      <Route exact path="/tv" element={< TVShows />}/>
      <Route exact path="/mylist" element={< UserListedMovies />}/>
      <Route exact path="/" element={< Netflix />}/>
    </Routes>
    </BrowserRouter>
  )
}


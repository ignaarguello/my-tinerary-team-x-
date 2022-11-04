import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';

// importo la hoja de estilos
import './App.css';

// importo las paginas de componentes
import Home from './pages/Home'
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/* <Home /> */}
      <NotFound />

      {/* <Routes>
        <Route path="/cities" element={<Cities />}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/index" element={<Main />}/>
        <Route path="/signin element={<SignIn />}/>
        <Route path="/signup element={<SignUp />}/>
        <Route path="/newcity element={<NewCity />}/>
        <Route path="/newhotel element={<NewHotel />}/>
        <Route path="/notfound element={<NotFound />}/>
      </Routes> */}
    </>
  )
}

export default App;

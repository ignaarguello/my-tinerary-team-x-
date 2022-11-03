import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';

// importo la hoja de estilos
import './App.css';

// importo las paginas de componentes
import Home1 from './pages/Home1'

function App() {
  return (
    <>
      <Home1 />

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

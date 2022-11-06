import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';

// importo la hoja de estilos
import './App.css';

// importo las paginas de componentes
import Home from './pages/Home'
import SignUp from './pages/SignUp/SignUp'
import Layout from './layout/Layout/Layout';
import Cities from './pages/Cities/Cities';



function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/cities" element={<Cities />}/>
        {/* <Route path="/hotels" element={<Hotels />}/> */}
        <Route path="/index" element={<Home />}/>
        {/* <Route path="/signin" element={<SignIn />}/> */}
        <Route path="/signup" element={<SignUp />}/>
        {/* <Route path="/newcity" element={<NewCity />}/> */}
        {/* <Route path="/newhotel" element={<NewHotel />}/> */}
        {/* <Route path="/notfound" element={<NotFound />}/> */}
      </Routes>
    </Layout>
    </>
  )
}

export default App;

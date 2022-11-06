import { Route, Routes } from 'react-router-dom';
import { Component } from 'react';

// importo la hoja de estilos
import './App.css';

// importo las paginas de componentes
import Layout from './layout/Layout/Layout';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import SingIn from './pages/SingIn';
import Hotels from './pages/Hotels';
import Cities from './pages/Cities/Cities'
import SignUp from './pages/SignUp/SignUp'


function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <NotFound /> */}
      {/* <SingIn /> */}
      

    <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cities" element={<Cities />}/>
          <Route path="/hotels" element={<Hotels />}/>
          <Route path="/index" element={<Home />}/>
          <Route path="/signin" element={<SingIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          {/* <Route path="/newcity" element={<NewCity />}/>
          <Route path="/newhotel" element={<NewHotel />}/> */}
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App;
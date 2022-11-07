import { Route, Routes } from 'react-router-dom';

// importo la hoja de estilos
import './App.css';

// importo las paginas de componentes
import Layout from './layout/Layout/Layout';
import Home from './pages/Home'
import SignUp from './pages/SignUp/SignUp'
import Cities from './pages/Cities/Cities';
import SingIn from './pages/SingIn'
import CitiesDetails from './pages/CitiesDetails/CitiesDetails';
import Hotels from './pages/Hotels';
import NotFound from './pages/NotFound'
import HotelsDetails from './pages/HotelsDetails'
import NewCity from './pages/NewCity'
import NewHotel from './pages/NewHotel'

function App() {
  return (
    <>
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/cities" element={<Cities />}/>
        <Route path="/hotels" element={<Hotels />}/>
        <Route path="/signin" element={<SingIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/cities/:cityid" element={<CitiesDetails />}/>
        <Route path="hotels/:id" element={<HotelsDetails />}/>
        <Route path="hotels/details" element={<HotelsDetails />}/>
        <Route path="/newhotel" element={<NewHotel />}/>
        <Route path="/newcity" element={<NewCity />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App;
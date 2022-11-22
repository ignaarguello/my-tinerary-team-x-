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
import MyCities from './pages/MyCities'
import EditMyCities from './pages/EditMyCities';
import MyItineraries from './pages/MyItineraries';
import EditMyItineraries from './pages/EditMyItineraries'

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
        <Route path="/hotels/:hotelId" element={<HotelsDetails />}/>
        <Route path="/newhotel" element={<NewHotel />}/>
        <Route path="/newcity" element={<NewCity />}/>
        <Route path="/*" element={<NotFound />}/>
        <Route path="/mycities" element={<MyCities />}/>
        <Route path="/mycities/edit/:id" element={<EditMyCities />}/>
        <Route path="/myitineraries" element={<MyItineraries />}/>
        <Route path="/myitineraries/edit/:id" element={<EditMyItineraries />}/>
      </Routes>
    </Layout>
    </>
  )
}

export default App;
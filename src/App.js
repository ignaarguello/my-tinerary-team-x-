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
import MyHotels from './pages/MyHotels';
import MyItineraries from './pages/MyItineraries';
import EditMyItineraries from './pages/EditMyItineraries'
import EditMyHotels from './pages/EditMyHotels'
import MyShows from './pages/MyShows'
import EditMyShows from './pages/EditMyShows'

//importo el componente para proteger las rutas
import ProtectedRoute from './components/ProtectedRoute';

function App() {

  let user = {
    id: 1,
    name: "Fabry",
    role: "user",
    online: false
  }

  return (
    <>
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/signin" element={<SingIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route element={<ProtectedRoute isAllowed={!!user.online} reDirect={"/home"}/>}>
          <Route path="/cities" element={<Cities />}/>
          <Route path="/hotels" element={<Hotels />}/>
          <Route path="/cities/:cityid" element={<CitiesDetails />}/>
          <Route path="/hotels/:hotelId" element={<HotelsDetails />}/>
          <Route path="/*" element={<NotFound />}/>
          <Route path="/myhotels/edit/:id" element={<EditMyHotels />}/>
          <Route path="/myitineraries" element={<MyItineraries />}/>
          <Route path="/myitineraries/edit/:id" element={<EditMyItineraries />}/>
          <Route path="/myshows" element={<MyShows />}/>
          <Route path="/myshows/edit/:id" element={<EditMyShows/>}/>
        </Route>

        <Route path="/newhotel" element={
          <ProtectedRoute isAllowed={!!user.online && user.role === "admin"} reDirect={"/"} >
            <NewHotel />
          </ProtectedRoute>
        }/>
        <Route path="/newcity" element={
          <ProtectedRoute isAllowed={!!user.online && user.role === "admin"} reDirect={"/"} >
            <NewCity />
          </ProtectedRoute>
        }/>
        <Route path="/mycities" element={
          <ProtectedRoute isAllowed={!!user.online && user.role === "admin"} reDirect={"/"} >
            <MyCities />
          </ProtectedRoute>
        }/>
        <Route path="/mycities/edit/:id" element={
          <ProtectedRoute isAllowed={!!user.online && user.role === "admin"} reDirect={"/"} >
            <EditMyCities />
          </ProtectedRoute>
        }/>
        <Route path="/myhotels" element={
          <ProtectedRoute isAllowed={!!user.online && user.role === "admin"} reDirect={"/"} >
            <MyHotels />
          </ProtectedRoute>
        }/>
        <Route path="/myhotels/edit/:id" element={
          <ProtectedRoute isAllowed={!!user.online && user.role === "admin"} reDirect={"/"} >
            <EditMyHotels />
          </ProtectedRoute>
        }/>
      </Routes>
    </Layout>
    </>
  )
}

export default App;
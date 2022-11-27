/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userActions from './redux/actions/userActions'

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
import NewTinerary from './pages/NewTinerary/NewTinerary';

function App() {

    let { logged, role } = useSelector(store => store.signIn)
    let prueba = useSelector(store => store)
    //console.log(prueba)
    let dispatch = useDispatch()
    let { re_log_in } = userActions

    useEffect(()=>{
      let token = JSON.parse(localStorage.getItem('token'))
      //console.log(token?.token.user)
      if(token){
        dispatch(re_log_in(token.token.user))
      }
    },[])


  return (
    <>
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route element={<ProtectedRoute isAllowed={logged ? false : true} reDirect={"/"} />}>
          <Route path="/signin" element={<SingIn />}/>
          <Route path="/signup" element={<SignUp />}/>
        </Route>
        <Route path="/*" element={<NotFound />}/>
        <Route element={<ProtectedRoute isAllowed={!!logged} reDirect={"/home"}/>}>
          <Route path="/cities" element={<Cities />}/>
          <Route path="/hotels" element={<Hotels />}/>
          <Route path="/cities/:cityid" element={<CitiesDetails />}/>
          <Route path="/hotels/:hotelId" element={<HotelsDetails />}/>
          <Route path="/myhotels/edit/:id" element={<EditMyHotels />}/>
          <Route path="/myitineraries" element={<MyItineraries />}/>
          <Route path="/myitineraries/edit/:id" element={<EditMyItineraries />}/>
          <Route path="/newtinerary" element={<NewTinerary />}/>
          <Route path="/myshows" element={<MyShows />}/>
          <Route path="/myshows/edit/:id" element={<EditMyShows/>}/>
        </Route>
        <Route element={<ProtectedRoute isAllowed={!!logged && role==="admin"} reDirect={"/"}/>}>
          <Route path="/newhotel" element={<NewHotel />}/>
          <Route path="/newcity" element={<NewCity />}/>
          <Route path="/mycities" element={<MyCities />}/>
          <Route path="/mycities/edit/:id" element={<EditMyCities />}/>
          <Route path="/myhotels" element={<MyHotels />}/>
          <Route path="/myhotels/edit/:id" element={<EditMyHotels />}/>
        </Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App;
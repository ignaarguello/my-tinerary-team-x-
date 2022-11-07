import { Route, Routes } from 'react-router-dom';


// importo la hoja de estilos
import './App.css';

// importo las paginas de componentes
import Layout from './layout/Layout/Layout';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import SingIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import Hotels from './pages/Hotels';
import HotelsDetails from './pages/HotelsDetails';
import Cities from './pages/Cities/Cities'
import NewHotel from './pages/NewHotel';

function App() {
  return (
    <Layout>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="home" element={<Home />}/>
            <Route path="/*" element={<NotFound />}/>
            <Route path="/signin" element={<SingIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/hotels" element={<Hotels />}/>
            <Route path="/cities" element={<Cities />}/>
            <Route path="hotels/details" element={<HotelsDetails />}/>
            <Route path="hotels/:id" element={<HotelsDetails />}/>
            <Route path="newhotel" element={<NewHotel/>}/>
        </Routes>
      </Layout>
  )
}

export default App;
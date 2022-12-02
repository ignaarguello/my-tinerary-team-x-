import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../NavBar/NavBar.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import userActions from '../../redux/actions/userActions'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let {log_out} = userActions
  let { logged, role, token, photo, name, id } = useSelector(store => store.signIn)
  //console.log(role)

  async function logout(event) {
    Swal.fire({
      title: 'Are you sure?',
      text: "We're gonna miss you!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Log out'
    }).then((result) => {
      if (result.isConfirmed) {
        let res = dispatch(log_out(token));
        navigate('/home', { replace: true })
      }
    })
}


  return (
    <>
      <nav className='nav'>
        <div className='logo-nav'>
          <LinkRouter to='/Home'> 
            <img className='logo-img' src='https://cdn.discordapp.com/attachments/1036655527377248287/1037749498925039747/logo-simple-sf.png' alt='my tinerary logo'/>
          </LinkRouter>
        </div>
        
          <div className="dropdown">
            <img className='logo-search' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA/ZJREFUaEPtmoGRDUEQhv+LABEgAkSACBABIkAEiAARIAJEgAgQASJABNR3tXO1Nde9M9Pb916te12lXt17OzP9z9/9T0+vI50zOzpneHUA/L8zfmB4JcPXJd2RxOeV6XM+5VdJPyR9kvRZEn/v1DIYBtgjSXcnkCMAAP9e0qtpI0bGhp5dA/iipKeSHodWPj3opaTnkn4nzWdOEwUMm68lATrTAPtwYj1z3pO5IoBfJLLqgYLtJ2eBeAQwbMIq7C7ZN0lvJkGCsSJMCBlz8PlA0rXGPMwB6NQQHwH8rgGW/IOZXgcBT/6jA54BmhBPs17AAEGJLfswOY7iRgyVZ36OM8tQ8Cxh7CotCWHYtQxWn0VQGmOYx2P7XpaQtRgm7L47akyoEXKZRm6jE7WRJlcH0sX1qQUYQPeN0S1miYqbk0CVo6sIGFUWaeCZx3RKaC8BJrdgtzac9ZSa7zm2GLtk5DsKTJVlGd9bOQ3LUa04XmcJsCdU3qJLwrbEJtFSm7fZrchqptcSYNitmVpaMAIYB2GasbVZoQ27bHjYPMAUB1+MWS81hMPL+ZaDN4ybE7n/yxhoPdua/+R3D7C1u1RQbETLCmiufzBHPuL8rek8RcxqoxoDiPV9XZF5EdHy6/h3D7AlGiMLIV6eIHkqbJ21FByI4NyWRLMJ2gNMONds3p4u7s1JOx7gaKqZtvSBqPhYzedFQ8eyPsN/s3Onms8CQgrw/dw8LWnVDy54b6AFOLyIs3q9BoUJolhbqi/7BNwVgpL2BnjVcdCLriOkf3ZUcsMhjTDUx0GmaPXi78313vnO7FjqdqDx4M6OJeusXHUcBHfAOh5H6oFTy2aXlkFc5rCdlpZ4QKF+uXJl9W1lYEesKPuztjWceT0cwNJ8dC/XQ29RamTq3rM0q0MKu/jU2xU1/WtVT9EWz5rN2FuLB6cRDnL5goFgl008ig3q6lXsgqHFMM8stWlhw2rRRBimReu1fNOKnh7AOL/UviGnORujzTXykjuv1xiEVQCnvEvuBQzoVvsGdmil9oYd6cLbjJ5GfhroEcA4CNNWn3oewjBRXqahrPOXaWhBeZnW0y6az5sCegRwWTzanRzJazbKEsrVoCOAi5DBouXUCLD6WdSY1y0Aow2UDjoKuBxZ5J/3VnEUOPnPfEUDCPl00GsAF0CoLNc4VLauvVugCV1SxHuvnA46A/AcFA5yaecfGzFvIhCuHF0lXGGv56hJBZ0NuMVo9Pc00FsBzEalgN4S4BTQWwPcAt18ab5FwB7ot9MZvqgTWwVcg+4C23s9jCrrLsaVurz7vzVtmeHQhh4Ah7ZtQ4MODG+IrJCrB4ZD27ahQeeO4X8KWuA9jrvAQAAAAABJRU5ErkJggg==" alt='magnifying glass' />
            <div className="dropdown-content">
                  {(!logged || role === "user" ) &&
                  <>
                  <LinkRouter to='/cities' className="link">
                    <p>Cities</p>
                  </LinkRouter>
                  <LinkRouter to='/hotels' className="link">
                    <p>Hotels</p>
                  </LinkRouter>
                  </>
                  }
                  { (logged && role=== "admin") &&
                  <>
                  <LinkRouter to='/cities' className="link">
                    <p>Cities</p>
                  </LinkRouter>
                  <LinkRouter to='/hotels' className="link">
                    <p>Hotels</p>
                  </LinkRouter>
                  <LinkRouter to='/newcity' className="link">
                    <p>Create city</p>
                  </LinkRouter>
                  <LinkRouter to='/newhotel' className="link">
                    <p>Create hotel</p>
                  </LinkRouter>
                  </>
                  }
            </div>
          </div>
        <div className="user-dropdown">
          <img className='logo-user' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABVNJREFUaEPtmuuRTkEQhnsjQASIABEgAkSACBABIkAEiAARIAJEgAgQAfWo6a0x27c5l60tu111fux+c+m3L+/09DkHcsrk4JThlTPA/7vHzzy8g4dvichVEbnUnvPtb7b6LCI/ReRbe/j73Q46HC65h4cBdF1EbreHv2cEA7xtz8dmkJn54dgtAQPsgYg8FJFZkJ6SgH8uIi+2Ar4V4LtNsa2AjgYAOIZ8vdbVawGTm29abq7VpTKfXL/Tcr8y/siYNYDJ0ZeF8P3V8vFDIya8BTkhGIyogNButJw/lyBh/v225jTopYAfi8iTYDdAvmqPgqsqhxHutScCT4iT21OyBDBeRSFPyDOMQfitEbzOOvCDJxgVb5dlFjAK4F1LvrSQXAt0XBvgHFNXnH0fNcIsgZ4BTM5CUJbg1cjrJWWSQXjT8zZEhlFSqQImr947BFWxMMSkFRdrQVAIREaOa4UFIUVC3j4zBjDvZoW9q4C/OkdPBSzgyHtCMxJSgXzECEtAM/9y5uIKYEIVhUfJwhivku94ZUaorJ4mlZUX3hiM31zJAKM03h0rKAiK0IwExSk1lwjHTWYo0mAkMrx8LTJWBthjZUInYmPCmJxfI+RkFN6kCM4Yhehwa4QIsOfdSih/cnKWuYScAsEweBJCGyX1VltrZG4IDIeYBBgBtnKXCopQjrzrMWmUXx5PZDmJlwntsSJzj6kIsEUMldyycpdLPed4JJyjo6eX7udGYQT4h0FWEEJWGxOuNAB6yfKRsVbe0wDQM9szljWPcL5gTfAAW1UV4Vy577LZGGJsnhUVrI2Re3EVN8aVwtoDbLFzRlaqw5aAq0a20s9kaw+wtUBGIAr4uEOafS3SMx3kAV6qNJtbpAUhwZx7kNZU/nuAOUfHSqpCWGx+nMeSGhBd0bkXk/A8wL8NV2RVmU6BfGDyi8YaeJoIQBn1DOWndWR9b0bPyE63Kem8B2AvxJKIPvJz5SjrJ60CbBXm1ZBWJfa+PPRgV4f0GtLqQ5vjbfbGRHXFvGoob0JalnfKbZQhOKmEOOasnO6HkrMcL1kDwEoNq1Ayy9KZwqNS13p5CpGhFKHHo6Un5KUtHghtxqv9XpaDpgoP6yAvtVBmmWmj8VYLyiyUPA97l+tZ4gKPejO7BGgo65FVtYVFWMw1mxTR2WoxddhN6DTEYPSzCOPKhaMHp69L2avS47bqfveWNdsACLsJTWvaqFk/quo9cpPOaMQNVs/NrfuzFs94XWNjz8t4kj5W1tyrgtVxhDonhEVoXs/NvY5m5aLVhbDyYy+wCpr0ovLqQXs8E3ZXMsBe9xEFIDCV6J0T5yu5mJ2v7AUI77weI8u64KBPSKwZYBbwSkR9c+dZmss7c3mq5yuRQv7zWK9KlXm9N5gpqVYAA9pibP4PoegHLH1uAhaPZf0vL5/hASJiBE2KwcDW+6XKy4Hyl3jeWecpvLQM7dfzWrfenqUaoephNonytFeCnM1enFWZmtzPavDo5DiyzwxgJkfvaHXxyhvFKmCve9LPrzYX/86ZBcycTAn9rqpSJUXAiRL97ssbN23cJYDZvJJfRAM3rFnigux4X5R9UVDtov5jrKWAq6AZB9vqA3uPBoAQYWOA6pOF/CKwS0O6VwZl8aT3wYmnuIb7LLlx9OD52ag51GONh3swMLhXLGTeqvyuRUz0bVhlnUWk5S2s31VxJcy+pispJyL6gRtEuJYEF7N0pizloX5JNxvqujahq1/yVcvSTK/dAPcbA16JSK+N/QVBLxbMIS+V3DYF2Su0VQ6XrHsSBp0BPgle2FOHMw/vad2TsPYfmGZATHD0mLIAAAAASUVORK5CYII=" alt='user'/>
          <div className="dropdown-content">
            { logged ?
              (role === "admin") ?
                <>
                  <LinkRouter to='/mycities' className="link">
                    <p>My Cities</p>
                  </LinkRouter>
                  <LinkRouter to='/myhotels' className="link">
                    <p>My Hotels</p>
                  </LinkRouter>
                  <LinkRouter to='/myitineraries' className="link">
                    <p>My Tineraries</p>
                  </LinkRouter> 
                  <LinkRouter to='/myshows' className="link">
                    <p>My Shows</p>
                  </LinkRouter> 
                </> :
                <>
                <LinkRouter to='/myitineraries' className="link">
                    <p>My Tineraries</p>
                  </LinkRouter> 
                  <LinkRouter to='/myshows' className="link">
                    <p>My Shows</p>
                  </LinkRouter> 
                </> :
              <>
                <LinkRouter to='/signin' className="link">
                  <p>Sign In</p>
                </LinkRouter>
                <LinkRouter to='/signup' className="link">
                  <p>Sign Up</p>
                </LinkRouter>
              </> 
              }
            </div>
          </div>
          { logged && 
          <div className='profile-dropdown'>
              <img className='picture-Navbar' src={`${photo}`} alt={`${name}`} />
              <p id='logout-link'>{`${name}`}</p>
              <div className="dropdown-content">
                <LinkRouter to={`/me/${id}`} className='link'>
                  <p>Profile</p>
                </LinkRouter>
                <div className="link" onClick={ () => logout(token) }><p>Logout</p></div>
                <LinkRouter to={`/myreactions`} className='link'>
                  <p>My reactions</p>
                </LinkRouter>
                {role === "admin" &&
                <LinkRouter to='/newreaction' className="link">
                  <p>New Reaction</p>
                </LinkRouter> 
                }
              </div>
          </div>
          }
        </nav>
      </>
  )
}

import React from 'react'
import CallToAction from '../CallToAction/CallToAction'
import './Home1.css'

export default function Home1() {

  let user = {
    id: 1,
    name: "Fabry",
    role: "user",
    online: false
  }

  return (
    <div className='home1'>
          <main className='main'>
            <div className='logo-central'>
              <img src='https://cdn.discordapp.com/attachments/1036655527377248287/1037824600941273198/logo-completo-sf.png' alt='My Tinerary logo and slogan' />
            </div>
            <div className='container-buttons-goto'>
              {user.online ?
              <>
                <CallToAction id='but-cities' name='/cities'/>
                <CallToAction id='but-hotels' name='/hotels'/>
              </> :
              <>
                <CallToAction id='but-cities' name='/signin'/>
                <CallToAction id='but-hotels' name='/signup'/>
              </>
              }
            </div>
          </main>
    </div>
  )
}

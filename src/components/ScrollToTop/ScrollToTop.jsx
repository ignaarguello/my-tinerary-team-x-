import React from 'react'
import { useEffect, useState } from 'react'
import './ScrollToTop.css'

export default function ScrollToTop() {
    let [backToTop, setBackToTop] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.screenY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    },[])

    let scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }

  return (<div className='containerBackToTop'>
      
      {ScrollToTop && (
          <div className='BtnToTop' style={{
              position:"fixed",
              bottom:"80px",
              right:"33px",
              height:"50px",
              width:"50px",
              fontSize:"50px",
              cursor:"pointer"
          }}
          onClick={scrollUp} ><img className='Imagen-BackToTop' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALBJREFUSEvtlNENgCAMRMtmbqJOpm7iZppLIKlY4CASP5QvSfS90p446bxcZ758T7CKyCEiM9vamhYBPnownikJK9DwUDwlYQQWnJaUBDF88+TQKmyzJ8kJLPikZkBJUoIcXLenKEkJUOniSWiLrlzHVBeCVGF/WbkWATpEcCumgO4WHKbSkFPtKA43fMgI/pia19ZrMY2reTSmqRv6kZiy1//tPSamzfCaH61Z0v0EJwycNBmk49ZCAAAAAElFTkSuQmCC"/></div>
      )}
    </div>)

}

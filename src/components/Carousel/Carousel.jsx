import React from 'react'
import ArrowRight from './Arrows/ArrowRight'
import ArrowLeft from './Arrows/ArrowLeft'
import CardCarousel from './Cards/CardsCarousel'
import cities from '../../cities'
import hotels from '../../hotels'
import { useState } from 'react'
import './Carousel.css'

export default function Carousel() {
  
    let [numeroAIncrementar, setNumeroAIncrementar] = useState(0)
    let nextCard = () => numeroAIncrementar<hotels.length-2 ? setNumeroAIncrementar(numeroAIncrementar+2) : setNumeroAIncrementar(0)
    let previousCard = () => numeroAIncrementar > 0 ? setNumeroAIncrementar(numeroAIncrementar-2) : setNumeroAIncrementar(hotels.length-2)

    return (
    <div id='containerCarousel'>
        <ArrowRight evento={nextCard}/>
          <div id='containerGrid'>
              <div className='containerCard containerCard1'>
                <CardCarousel imageCard = {cities[numeroAIncrementar].photo} nameCard={cities[numeroAIncrementar].name} key={cities.id} />
                <CardCarousel imageCard = {cities[numeroAIncrementar+1].photo} nameCard={cities[numeroAIncrementar+1].name} key={cities.id} />
          </div>
        {/*  */}
        <div className='containerCard'>
            <CardCarousel imageCard = {hotels[numeroAIncrementar].photo[1]} nameCard={hotels[numeroAIncrementar].name} key={hotels.id}/>
            <CardCarousel imageCard = {hotels[numeroAIncrementar+1].photo[1]} nameCard={hotels[numeroAIncrementar+1].name} key={hotels.id}/>
        </div>
    </div>
        <ArrowLeft evento={previousCard}/>
    </div>
  )

}

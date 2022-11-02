import React from 'react'
import ArrowRight from '../Arrows/ArrowRight'
import ArrowLeft from '../Arrows/ArrowLeft'
import CardsGrid from '../CardsGrid/CardsGrid'
import './Carousel.css'

export default function Carousel() {
  return (
    <div id='containerCarousel'>
        <ArrowRight/>
            <CardsGrid/>
        <ArrowLeft/>
    </div>
  )
}

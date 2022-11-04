import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AutoToTop from '../../components/AutoToTop/AutoToTop'
import Footer from '../../components/Footer/Footer'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

export default function Layout(props) {
  return (
    <div className='layout'>
      <AutoToTop />
      <NavBar />
      <div>
        {props.children}
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

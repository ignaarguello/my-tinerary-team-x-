import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function AutoToTop() {

    let { url } = useLocation()

    useEffect( () => {
      window.scrollTo(0,0)
    }, [url] )

  return (
    null
  )
}

import React from 'react'
import Header from './Navbars/Header'
import SimpleFooter from './Footers/SimpleFooter'

function Layout({children}) {
  return (
    <div>

    <Header/>

    {children}

    <SimpleFooter/>

      
    </div>
  )
}

export default Layout

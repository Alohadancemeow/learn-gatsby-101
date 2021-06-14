import React from 'react'
import { GlobalStyle } from './styles/globalStyle'

import Header from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout

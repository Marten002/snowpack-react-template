import React, {lazy, Suspense} from 'react'

import './App.scss'

const Header = lazy(() => import('./components/Header/Header'))
const Main = lazy(() => import('./components/Main/Main'))
const Footer = lazy(() => import('./components/Footer/Footer'))

const App = () => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <div className="app">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </Suspense>
    )
}

export default App

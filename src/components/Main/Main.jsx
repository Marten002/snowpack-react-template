import React, {useEffect, useState} from 'react'

import './Main.scss'

const Main = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => setCount(count + 1), 1000)
        return () => clearTimeout(timer)
    }, [count, setCount])

    return (
        <main className="main">
            Template has been open for {count} seconds ago.
        </main>
    )
}

export default Main

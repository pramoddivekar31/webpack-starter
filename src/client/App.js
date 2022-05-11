import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        console.log('Effect')
    }, [])

    const getBookData = () => {
        fetch('/getbooks')
            .then((res) => res.json())
            .then((res) => console.log('data is', res))
    }

    return (
        <>
            <h1> Webpack Starter New | {JSON.stringify(new Date())} </h1>
            <div>Adding new div here cosmqsadnsca ajs</div>
            <button onClick={getBookData}>Click Me</button>
        </>
    )
}

export default App;
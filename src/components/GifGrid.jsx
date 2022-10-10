import { useEffect } from 'react'

const GifGrid = ( {category} ) => {

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=oiaoJotLfKYC4F2eI4ZBucdUJkjWwAj1&q=cheeseburgers=${ category }&limit=15`
        const resp = await fetch(url)
        console.log(resp);
    }
    getGifs()

    useEffect( () => {

    }, [])

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid
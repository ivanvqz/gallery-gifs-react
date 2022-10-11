import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifs"

const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category )
        setImages(newImages)
    }

    useEffect( () => {
        getImages()
        //para que se renderice solo una vez
        setIsLoading(false)
    }, [])
    
    return {
        // images: images
        images,
        //isLoading: isLoading
        isLoading
    }
}

export default useFetchGifs
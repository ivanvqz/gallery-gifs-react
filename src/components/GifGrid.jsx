import useFetchGifs from '../hooks/useFetchGifs'
import GifItem from './GifItem'

export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs( category )

    return (
        <>
            <h3 className='center'>{ category }</h3>
            {
                isLoading
                ? (<h2>Cargando...</h2>)
                : null
            }

            <div className='card-grid'>
            { isLoading && <h2>Cargando...</h2>}
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id}
                            //esparcir el objeto image, permite que cada propiedad del objeto sea una propiedad del componente
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
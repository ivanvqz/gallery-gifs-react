import { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

    // Hook para mantener el estado de las categorías
    const [categories, setCategories] = useState([ 'Pokemon', 'Dragon ball' ])
    const onAddCategory = () => {
        //Agregar una categoría
        //para agregar un nuevo elemento, se debe de copiar el array, al final se una nueva categoria
        // setCategories([ ...categories, 'Re Zero' ])
        setCategories( cat => [...categories, 'Bob esponha'] )
    } 

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory />
            
            {/* Listado de gifs */}
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                { 
                categories.map( category => {
                        return <li key={ category }>{ category }</li>
                    })
                }
                
                
            </ol>

        </>
    )
}

export default GifExpertApp
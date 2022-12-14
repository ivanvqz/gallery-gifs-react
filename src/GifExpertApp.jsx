import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {

    // Hook para mantener el estado de las categorías
    const [categories, setCategories] = useState([ '' ])

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;        //Agregar una categoría
        //para agregar un nuevo elemento, se debe de copiar el array, al final se una nueva categoria
        setCategories([ newCategory, ...categories ])
        // setCategories( cat => [NewCategory, ...categories] )
    } 

    return (
        <div className='container'>
            <h1 className="center background-clip">Gify App</h1>

            <AddCategory 
                // setCategories={ setCategories } 
                onNewCategory={ (event) => onAddCategory(event) }
            />

            { 
                categories.map( (category) => (
                        <GifGrid 
                            key={category} 
                            category={category} 
                        />
                    ))
            }

        </div>
    )
}

export default GifExpertApp
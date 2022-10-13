import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        //obtiene el evento, en ese evento se apunta al value, esto significa que el evento será lo que se escriba
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault()

        //solo se puede enviar el valor si se escribe mas de dos palabras
        if( inputValue.trim().length <= 1 ) return

        //callback que recibe un array de lo que se introduzca y un spread
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form
            onSubmit={ onSubmit }
        >
            <div className="input-form">
                <input
                    type="text"
                    placeholder="Buscar Gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </div>
        </form>
    )
}
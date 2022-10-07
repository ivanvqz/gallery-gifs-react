import { useState } from "react"

const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Pokemon')
    const onInputChange = ({ target }) => {
        //obtiene el evento, en ese evento se apunta al value, esto significa que el evento será lo que se escriba
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue);
    }

    return (
        <form
            onSubmit={ (event) => onSubmit(event) }
        >
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}

export default AddCategory
import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

     const [inputValue, setInputValue] = useState(''); //und
     const handleInputChange = (e) => {
         setInputValue(e.target.value);
     }

     const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories ( catego => [inputValue, ...catego,]);
            setInputValue('');
        }

        // console.log('Submit hecho');
}

    return (
        <>
        {/* <h1>{inputValue}</h1> */}
        <form className='addCategory-input' onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            /> 
        </form>
        

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
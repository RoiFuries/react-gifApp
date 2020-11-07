import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () =>{


    const [categories, setCategories] = useState(['Naruto']);


///////////////// function on button ////////////////////////////////////////////
    // const handleAdd = () => {
    //     // setCategories (['Malcom', ...categories]);
    //     setCategories (catego => [...catego, 'malcom']);

    //     // categories.push('malcom')
    //     // console.log(categories);
    // }



    return (
        <>
        <h2 className='tile-GifExpertApp'>Gif-App </h2>
        <h3 className='subtite--GifExpertApp'>by RoiFuries</h3>
        <AddCategory setCategories={setCategories}/>
        <hr/>

        <ol>
           {
               categories.map( category => (
                    // <li key={ category }> {category}</li>
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }    
        </ol>

        {/* function on button */}
        {/* <button onClick={ handleAdd } > agregar</button> */}


    

        </>
    );
}

export default GifExpertApp;
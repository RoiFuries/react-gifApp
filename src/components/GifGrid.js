import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const {data:images, loading} = useFetchGifs( category );
   
    // useEffect ( () => {
    //     getGifs(category)
    //         .then(setImages)
    // }, [category])


/////se fue al archivo getgifs para que esuviera mas limpio
    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI (category)}&limit=10&api_key=zsu2zoxcGFMEBonW4ZmDPig6GZQE9TjC`
    //     const resp = await fetch( url );
    //     const {data} = await resp.json();

    //     const gifs = data.map( img => {
    //          return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })

    //     console.log(gifs);
    //     setImages(gifs)
    // }

    return (
        <>
            <h3 className='animate__animated  animate__flipInX animate__delay-3'>{category}</h3>
            {loading && <p> Loading</p>}


            <div className='card-grid'>
                {
                    // images.map( img => (
                    //     <li key={img.id}> {img.title}</li>
                    // ))
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img }
                        />
                        ))
                }
            </div>
        </>
    )
}

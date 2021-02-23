import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto Shippuden']
    const [categories, setCategories] = useState(['Naruto Shippuden']);

    // const handleAdd = () => {
    //     //setCategories([...categories, 'Boruto'] );
    //     setCategories( cats => [...cats, 'Boruto' ]);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            
        <ol>
            {
                categories.map( category =>
                    <GifGrid
                        key={ category } 
                        category={ category }
                    />
                )
            }
        </ol>
        

        </>
    )
}

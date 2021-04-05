import React from 'react';

import './food.css';
import { useDispatch } from 'react-redux'


function Food() {
    const dispatch = useDispatch();

    const SearchRecipe = (e) => {
        if(e.keyCode === 13 && e.target.value.trim().length > 0) {
            var search = e.target.value.trim();
            var from = Math.round(Math.random()*100);
            fetch(`https://api.edamam.com/search?q=${search}&app_id=${process.env.REACT_APP_RECIPE_APP_ID}&app_key=${process.env.REACT_APP_RECIPE_API_KEY}&from=${from}&to=${from+12}`)
            .then(res => res.json())
            .then(data => {
                dispatch({type: 'ALL', payload: data})
            })
            .catch(err => alert(err.message))
        }
    }

    // React.useEffect(() => {
    //     console.log(document.querySelector('.food'))
    // })
    
    return (
    <div className='food'>
        <div className='food_search_box'>
            <h3 className='search_heading'>FIND A RECIPE</h3>
            <input className='food_search_input' type='text' placeholder='Search Recipe' onKeyUp={(e) => SearchRecipe(e)} />
        </div>
    </div>
    )
}

export default Food

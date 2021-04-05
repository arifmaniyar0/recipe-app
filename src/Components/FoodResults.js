import React,{ useState, useEffect } from 'react';
import './foodresults.css';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

function FoodResults() {
    const foodData = useSelector(state => state.food)
    const history = useHistory();

    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        setRecipe(foodData);
    },[foodData])
    
    const ShowDetails = recipe => {
        history.push({
            pathname: '/details',
            state: recipe
        })
    }

    return (
        <>
        <div className='food_results'>
            <h2>Results: {recipe?.q}</h2>
            <div className='food_items'>
            {
                recipe?.hits?.map((item,i) => (
                    <div className='food_item' onClick={() => ShowDetails(item.recipe)} key={i}>                
                        <img src={item.recipe.image} alt='recipe' />
                        <h5>{item.recipe.label}</h5>
                    </div>
                ))
            }
            </div>
        </div>
        </>
    )
}

export default FoodResults

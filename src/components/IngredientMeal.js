import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const IngredientMeal = () => {
    const [mealByIng, setMealByIng] = useState([])
    const params = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${params.name}`)
            .then(({data}) => setMealByIng(data.meals))
    }, [params.name])
    return (
        <div className="container">

            <div className="row">
                <Link className="col-3">
                    <img src={`https://www.themealdb.com/images/ingredients/${params.name}.png`} alt={params.name}/>
                </Link>
                <div className="row">
                    {
                        mealByIng.map(meal =>

                            <div className="col-3 mb-3">
                                <Link to={`/meal/i=${meal.idMeal}`}>
                                    <img src={meal.strMealThumb} alt="item.strMeal" width="300px"/>
                                    {meal.strMeal}
                                </Link>
                            </div>

                        )}
                </div>
            </div>
            <Link to="/meals" className="text-center">Back to Meals</Link>
        </div>
    );
};

export default IngredientMeal;
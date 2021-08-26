import React, {useEffect} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const Browse = () => {
    const params = useParams()
    const [searchedMeals, setSearchedMeals] = useParams()
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(({data}) => console.log(data))
    })
    return (
        <div className="meal-info row">
            {searchedMeals.map(meal =>
                <div className="col-6">
                    <Link to={`/meal/i=${meal.idMeal}`}>
                        <img src={meal.strMealThumb} alt="item.strMeal" width="300px"/>
                        {meal.strMeal}</Link>
                </div>
            )}

        </div>
    );
};

export default Browse;
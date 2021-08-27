import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const Browse = () => {
    const params = useParams()
    const [searchedMeals, setSearchedMeals] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(({data}) => setSearchedMeals(data.meals))
    }, [params.name])
    console.log(searchedMeals)
    return (
        <div className="container">
            <div className="row">
                {
                    searchedMeals.map(meal =>
                        <div className="col-3 mb-3">
                            <Link to={`/meal/i=${meal.idMeal}`}>
                                <img src={meal.strMealThumb} alt="item.strMeal" width="300px"/>
                                {meal.strMeal}
                            </Link>
                        </div>
                    )}
            </div>
        </div>
);
};

export default Browse;
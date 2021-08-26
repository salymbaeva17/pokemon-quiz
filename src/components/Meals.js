import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Meals = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => setMeals(data.meals))
    }, [])
    return (
        <div>
            All Meals
            {
                <div className="row">
                    {meals.map(item =>
                        <div key={item.idMeal} className="col-3 meal-box">
                            <Link to={`/meal/i=${item.idMeal}`}>
                                <img src={item.strMealThumb} alt="item.strMeal" width="300px"/>
                                {item.strMeal}</Link>
                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default Meals;
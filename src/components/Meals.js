import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Meals = () => {
    const [inputValue, setInputValue] = useState("")
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios("https://www.themealdb.com/api/json/v2/1/randomselection.php")
            .then(({data}) => setMeals(data.meals))
    }, [])
    const input = (e) => {
        setInputValue(e.target.value )
    }
    return (
        <div>
            All Meals
            <div>
                <input value={inputValue} type="text" onChange={input}/>
                <Link to={`/browse/${inputValue}`} type="button"><i className="fas fa-search" /></Link>
            </div>
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
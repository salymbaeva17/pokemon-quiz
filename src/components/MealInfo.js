import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";

const MealInfo = () => {
    const params = useParams()
    const [meal, setMeal] = useState({})

    const ings = Array(20).fill(0).reduce((acc, item, idx) => {
        if (meal[`strIngredient${idx + 1}`]) {
            return [...acc, meal[`strIngredient${idx + 1}`]]
        }
        return acc
    }, [])

    useEffect(() => {
            axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
                .then(({data}) => setMeal(data.meals[0]))
        }, [params.id]
    )

    return (
        <div className="meal-info row">
            <div className="col-6">
                <img src={meal.strMealThumb} alt={meal.strMeal}/>
            </div>
            <div className="col-6">
                <div className="row">
                    {
                        ings.map((item, idx) =>
                            <Link to={`/ingredient/${item}`} key={idx} className="ing-img col-3">
                                <img src={`https://www.themealdb.com/images/ingredients/${item}.png`} alt="" />
                                <p>{item}</p>
                            </Link>

                        )
                    }
                </div>
            </div>
            <div className="col-6">
                <h3>{meal.strMeal}</h3>
                <p>Instructions: {meal.strInstructions}</p>

            </div>
            <Link to="/meals" className="text-center">Back to Meals</Link>
        </div>
    );
};

export default MealInfo;
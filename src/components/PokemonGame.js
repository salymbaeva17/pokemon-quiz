import React, {useEffect, useState} from 'react';
import axios from "axios"


const PokemonGame = () => {

    const randomNum = () => {
        return Math.round(Math.random() * 149 )+ 1
    }

    const [pokemons, setPokemons] = useState([])
    const [rightAnswer, setRightAnswer] = useState({})
    const [answersList, setAnswersList] = useState([])
    const [score, setScore] = useState(0)
    const [freeAttempts, setFreeAttempts] = useState(0)
    const [isRight, setIsRight] = useState(false)

    const handleClick = () => {
        if (!freeAttempts){
            setFreeAttempts(10)
            setScore(0)
        }
        const random = randomNum()
        const answerOptions = [random, randomNum(), randomNum(), randomNum()]
        setRightAnswer(pokemons.find(el => el.id === random))
        setAnswersList(answerOptions.sort().map(num => pokemons.find(el => el.id === num)))
    }
    const clickAnswersList = (id) => {
        setFreeAttempts(10)
        setFreeAttempts(freeAttempts - 1)

        if (rightAnswer.id === id) {
            setScore(score + 1)
        }

        setIsRight(true)

        setTimeout(() => {
            handleClick()
            setIsRight(false)
        }, 500)
    }
    useEffect(() => {
        axios(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
            .then(({data}) => setPokemons(data.pokemon))
    }, [])
    return (
        <div className="mx-auto ">
            <div>
                <button className="btn btn-secondary" onClick={handleClick}>{freeAttempts? "RESTART" : "START" }</button>
                {
                    Boolean(freeAttempts) ?

                        <div className="col-3 mx-auto">

                            <div>
                                <img src={rightAnswer.img} alt=""/>
                            </div>
                            <div className="options">
                                {answersList.map((button, idx) =>
                                    <button key={idx} className={`border border-2 btn ${isRight && (button.id === rightAnswer.id ? "btn-success" : "btn-danger")}`}
                                            disabled={isRight}
                                            onClick={() => clickAnswersList(button.id)}>{button.name}</button>
                                )}
                            </div>
                        </div>
                        : <div className="col-3 p-3 mx-auto bg-primary text-white max-width">SCORE: {score} </div>
                }
            </div>
        </div>
    );
};

export default PokemonGame;
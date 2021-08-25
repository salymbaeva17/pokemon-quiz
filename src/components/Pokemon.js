import React, {useEffect, useState} from 'react';
import axios from "axios";

const Pokemon = () => {
    const [pokemons, setPokemons] = useState([])
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const filteredPokemon = pokemons.filter(el => el.name.toLowerCase().includes(search))
    const handleSearch = (e) => {
        setSearch(e.target.value.toLowerCase())
    }
   useEffect(() => {
            axios(`https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`)
                .then(({data}) => setPokemons(data.pokemon))
    })
    return (
        <div className="container-sm">
            <div className="input">
                <input type="text" onChange={handleSearch}/>
            </div>
            <div className="row">

                {filteredPokemon.slice(currentPage * 15, (currentPage * 15) + 15).map(el => {
                    return (
                        <div className="col-3 text-center">
                            <img src={el.img} alt={el.name}/>
                            <h4>{el.name}</h4>
                        </div>
                    )
                })}
                <nav>
                    <ul className="pagination">
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el, idx) =>
                                <li className="page-item"  onClick={() => setCurrentPage(idx)}>{el}</li> )
                        }
                    </ul>
                </nav>
            </div>
        </div>

    );
};

export default Pokemon;
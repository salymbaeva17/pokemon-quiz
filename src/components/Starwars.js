import {useState} from "react";
import axios from "axios"

const Starwars = () => {
    const [userId, setUserId] = useState("")
    const [people, setPeople] = useState({})
    const handleInput = (e) => {
      setUserId(e.target.value)
    }
    const handleClick = () => {
      axios(`https://swapi.dev/api/people/${userId}`)
          .then(({data}) => setPeople(data))
    }
    return (
        <div>
            <input onChange={handleInput} type="text"/>
            <button onClick={handleClick}>Get</button>
            <div>{people.name}</div>
        </div>
    )
}

export default Starwars
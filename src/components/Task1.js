import React, {useEffect, useState} from "react";
import axios from "axios";


const Task1 = () => {
    const [userId, setUserId] = useState(1)
    const [people, setPeople] = useState({})
    useEffect(() => {
            axios(`https://swapi.dev/api/people/${userId}`)
                .then(({data}) => setPeople(data))
        }, [userId]
    )
    const dec = () => {
        if (userId === 1)  {
            setUserId(83)
        } else {
            setUserId(+userId - 1)
        }
    }
    const inc = () => {
        if (userId === 83) {
            setUserId(1)
        } else {
            setUserId(+userId + 1)
        }

    }
    const handleInput = (e) => {
        if (e.target.value > 83){
            setUserId(Math.min(83, e.target.value))
        } else {
            setUserId(e.target.value)
        }

    }
    return (

    <div className="col-3">
        <div className="d-flex mb-3">
            <button className="btn btn-info" onClick={dec}>◀︎</button>
            <input className="form-control" onChange={handleInput} type="text" value={userId}/>
            <button className="btn btn-info" onClick={inc}>▶︎</button>
        </div>
        <div className="text-center mt-2 h3 border border-2 border-info rounded-2 pt-2 pb-2">{people.name}</div>
    </div>

    )
}
export default Task1
// import React, {useEffect, useState} from 'react';
// import axios from "axios";
//
// const Cat = () => {
//     const [catBreed, setCatBreed] = useState([])
//     const [optionValue, setOptionValue] = useState("")
//     useEffect(() => {
//         axios("https://api.thecatapi.com/v1/breeds")
//             .then(({data}) => setCatBreed(data))
//     }, [])
//     return (
//         <div>
//             <select>
//                 {
//                     catBreed.map(item => {
//                             return <option key={item.id}>{item.name}</option>
//                         }
//                     )
//                 }
//             </select>
//             <div>
//                 <img src={
//                     catBreed.map(item => item.cfa_url)} alt=""/>
//             </div>
//         </div>
//     )
// }
//
// export default Cat;


import React, {useEffect, useState} from 'react';
import axios from "axios";

const Cat = () => {
    const [catBreed, setCatBreed] = useState([])
    const [oneCat, setOneCat] = useState({})
    const handleSelect = (e) => {
        setOneCat(catBreed.find(el => el.id === e.target.value))
    }
    useEffect(() => {
        axios("https://api.thecatapi.com/v1/breeds")
            .then(({data}) => setCatBreed(data))

    }, [oneCat])

    return (
        <div className="row offset-4">
            <div className="col-4">
                <select onChange={handleSelect}>
                    <option selected disabled>Choose breed</option>
                    {
                        catBreed.map(item => {
                                return (
                                    <option value={item.id} key={item.id}>{item.name}</option>)
                            }
                        )
                    }
                </select>

                {oneCat.id &&
                <div className="text-center">
                    <img src={oneCat.image.url} alt={oneCat.name} width="450"/>
                    <h3>{oneCat.name}</h3>
                    <p>{oneCat.description}</p>
                    <span>{oneCat.weight.metric} kgs</span>
                    <p>{oneCat.life_span} average life span</p>
                </div>
                }

            </div>
        </div>

    )
}

export default Cat;
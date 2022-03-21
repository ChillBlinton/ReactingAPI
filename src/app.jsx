import React from 'react';
import React, { useState } from "react";

const App = () => {

    const [films, setFilms] = useState([]);
    const [peep, setPeep] = useState([]);


///const fetchfilms, https://ghibliapi.herokuapp.com/films
    const getFilms = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await res.json()
        setFilms(data);
    }
   
//peeps...  https://ghibliapi.herokuapp.com/people
    const getPeep = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/people')
        const data = await res.json()
        setPeep(data);
    }


    //return maps

    const Films = films.map(val => {
        return<>
            <div>
        


            </div>
        </>
    }
    )
//bs cards info here


    //Create buttons

    return (
        <>
            <button className='' onClick={() => getFilms()} >Load Films</button>
            <button className='' onClick={() => getPeep()} >Load Peep</button>
            
        </>
    )

};
export default App;

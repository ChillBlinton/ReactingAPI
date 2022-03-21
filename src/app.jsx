import React from 'react';

const App = () => {

    const [films, setFilms] = useState([]);
    const [peep, setPeep] = useState([]);


///fetchfilms
    const getFilms = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await res.json()
        setFilms(data);
    }
   
//peeps
    const getPeep = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/people')
        const data = await res.json()
        setPeep(data);
    }


    //return maps

    const Films = films.map(val => {
        return<>
            <div classname="col-md-3">


            </div>
        </>
    }
        )



    //Create buttons

    return (
        <>
            <button className='' onClick={() => getFilms()} >Load Films</button>
            <button className='' onClick={() => getPeep()} >Load Peep</button>
            
        </>
    )

};
export default App;

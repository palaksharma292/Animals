import AnimalShow from "./AnimalShow";
import {useState} from 'react';
import './App.css';

function getRandomAnimal(){
    const animal=['bird','cat','cow','dog','gator','horse'];
    return animal[Math.floor(Math.random()*animal.length)];
}

function App(){
    const [animals, setAnimals]=useState([]);

    const handleClick=()=>{
        setAnimals([...animals,getRandomAnimal()]);
    };

    const renderedAnimals=animals.map((animal,index)=>{
        return <AnimalShow type={animal} key={index} />
    });

    return(
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animals-list">{renderedAnimals}</div>
        </div>
    );
};

export default App;
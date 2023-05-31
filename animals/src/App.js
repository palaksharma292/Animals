import AnimalShow from "./AnimalShow";

function App(){
    const handleClick=()=>{
        console.log("button Cicked");
    };

    return(
        <div>
            <button onClick={handleClick}>Add Animal</button>
        </div>
    );
};

export default App;
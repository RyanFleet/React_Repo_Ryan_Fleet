import { useState }from "react";
import { useEffect } from "react";


const Example = (props) => {
    const [poki, setPoki] = useState([]);

    useEffect(() => {
        console.log('hello')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=800')
            .then(response => response.json())
            .then(response => setPoki(response.results))
    }, []);

    return (
        <div>
            {poki.length > 0 && poki.map((poki, index) => {
                return (<div key={index}> • {poki.name} </div>)
            })}
        </div>
    );
}
export default Example;


import './App.css';
import {useEffect, useState} from "react";
import Panel from "./components/Panel";

function App() {
    const [text, setText] = useState('');
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/924938')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWeather(data['consolidated_weather']);
            });
    }, []);

    return (
        <div className="App">
            <header className={"header"}>
                <h1 className={"header-title"}>Weather App</h1>
            </header>
            {weather.length === 0 ?
                <div>Loading...</div> :
                <ul className={"panel-container"}>{
                    weather.map((el) =>
                        <li className={"panel-wrap"} key={`${el}` + Math.random() + Math.random()}>
                            <Panel obj={el}/>
                        </li>)
                }
                </ul>
            }
        </div>
    );
}

export default App;

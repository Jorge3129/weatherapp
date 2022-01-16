import React from "react";

class Home extends React.Component {

    state = {};

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/924938')
            .then(response => response.json())
            .then(data => {
                console.log("DATA: " + data['consolidated_weather'][0]['weather_state_name']);
                this.setState({text: `${JSON.stringify(data['consolidated_weather'][0]['weather_state_name'])}`});
            });
    }

    render() {
        return (
            <div>
                {this.state.text}
            </div>
        );
    }
}

export default Home;

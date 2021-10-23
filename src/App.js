import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";


const API_KEY = "fdb60fe12aa73018edf991a920cfc787"

class App extends React.Component {

	getWeather = async () => {
		const apiFetch = await 
		fetch(`api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`);
	};

	render () {
		return(
			<div>
				<Info/>
				<Form/>
				<Weather/>
			</div>		
		);
	}
}

export default App

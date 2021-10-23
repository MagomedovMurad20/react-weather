import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";


const API_KEY = "fdb60fe12aa73018edf991a920cfc787";


class App extends React.Component {

	state = {
		city: undefined,
		temp: undefined,
		country: undefined,
		sunryse: undefined,
		sunset: undefined,
		error : undefined
	};

	getWeather = async (e) => {
		e.preventDefault();
		
		const city = e.target.gorod.value

		const apiFetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
		
		const data = await apiFetch.json();
		console.log(data);

		this.setState({
			city: data.name,
			temp: data.main.temp,
			country: data.sys.country,
			sunryse: data.sys.sunrise,
			sunset: data.sys.sunset,
			error : ""
		});
	};

render () {
		return(
			<div>
				<Info/>
				<Form propsWeather={this.getWeather}/>
				<Weather
				city={this.state.city}
				temp={this.state.temp}
				country={this.state.country}
				sunryse={this.state.sunryse}
				sunset={this.state.sunset}
				error={this.state.error}
				/>
			</div>		
		);
	}
}

export default App

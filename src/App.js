import React from "react";
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";



const API_KEY = "fdb60fe12aa73018edf991a920cfc787";


class App extends React.Component {

	state = {
		city: undefined,
		temp: undefined,
		speed: undefined,
		vlaga: undefined,
		error : undefined
	};

	getWeather = async (e) => {
		e.preventDefault();
		
		const city = e.target.gorod.value
	

	if (city) {
				const apiFetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
		
				const data = await apiFetch.json();

				const tempFloat = data.main.temp;
				const speedFloat = data.wind.speed;

				const intvalueTemp = Math.floor(tempFloat);
				const intvalueSpeed = Math.floor(speedFloat)


				console.log(data);
				

				this.setState({
					city: data.name,
					temp: intvalueTemp,
					speed: intvalueSpeed,
					vlaga: data.main.humidity,
					error: undefined
				});
				

				} else {
					this.setState = ({
						city: undefined,
						temp: undefined,
						speed: undefined,
						vlaga: undefined,
						error : "не удалось найти"
					});
				}
		
	};

render () {
		return(
			<div className="wrapper">
				<div className="div main">
					<container>
						<div className="div row">
							<div className="col-xs-5">
							<Info/>
							</div>
							<div className="col-xs-7">
							<Form propsWeather={this.getWeather}/>
							<Weather
							city={this.state.city}
							temp={this.state.temp}
							speed={this.state.speed}
							error={this.state.error}
							vlaga={this.state.vlaga}
							/>
							</div>
						</div>
					
					</container>
				</div>
			</div>		
		);
	}
}

export default App

import React from "react";
import Form from "./components/Form";
import Info from "./components/info";
import Weather from "./components/Weather";



class App extends React.Component {
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

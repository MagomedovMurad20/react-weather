import React from "react";

class Info extends React.Component {

	render() {
		return (
			<div>
				<form action=""
				onSubmit={this.props.propsWeather}>
					<input type="text" name="gorod" placeholder="Город"/> <br />
					<button>Получить погоду</button>
				</form>
			</div>
		);
	}
}

export default Info

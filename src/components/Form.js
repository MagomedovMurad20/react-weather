import React from "react";

const Form = props => (
	<div>
				<form onSubmit={props.propsWeather}>
					<input type="text" name="gorod" placeholder="Город"/> <button>Получить погоду</button>
				</form>
			</div>
)

export default Form

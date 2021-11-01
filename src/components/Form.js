import React from "react";

const Form = props => (
	<div>
				<form onSubmit={props.propsWeather} className="forma">
					<input type="text" name="gorod" placeholder="Город"/> <button className="">Получить погоду</button>
				</form>
			</div>
)

export default Form

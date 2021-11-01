import React from "react";

const Weather = props => (
	<div>
		{props.city && 
		<div>
		<p>Местоположение: { props.city} , { props.vlag}</p>
		<p>{ props.temp}</p>
		<p>{ props.vlag}</p>
		<p>{ props.sunset}</p>
		</div>
		}
		<p>{ props.error}</p>
	</div>
)


export default Weather

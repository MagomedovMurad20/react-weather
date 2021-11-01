import React from "react";

const Weather = props => (
	<div>
		{props.city && 
		<div className="infoWeath">
		<p>Местоположение: { props.city} , { props.vlag}</p>
		<p>Температура: + { props.temp}</p>
		<p>Скорость ветра: { props.speed} м/с </p>
		<p>Влажность: { props.vlaga} %</p>
		</div>
		}
		<p>{ props.error}</p>
	</div>
)


export default Weather

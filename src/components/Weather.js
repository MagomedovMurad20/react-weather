import React from "react";

class Info extends React.Component {

	render() {
		return (
			<div>
				{this.props.city}
				<br />
				{this.props.temp}
			</div>
		);
	}
}

export default Info

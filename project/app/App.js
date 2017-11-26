import React from 'react';
import ReactDOM from 'react-dom';

const body = document.getElementsByTagName( 'BODY' )[0];

class App extends React.Component {
	render() {
		return <h1>Volley Stats app</h1>
	}
};

ReactDOM.render( <App/>, body );

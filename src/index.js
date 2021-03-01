import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import DetailsPage from './DetailsPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const axios = require("axios");

const App = function () {
	const [count, setCount] = useState([]);
	

	const apiCall = async () => {
		const username = document.getElementById("search").value;
		const URL = `https://api.paladins.guru/v3/search?term=${username}&type=Player`;
		const { data } = await axios.default.get(URL);
		console.log(data);
		setCount(data);
	}

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact render={props => (<Home apiCall={apiCall} count={count}/>)} />  
					<Route 
						exact
						path="/player/:id"
						render={props => <DetailsPage {...props} />} 
					/>
				</Switch>
      		</BrowserRouter>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));



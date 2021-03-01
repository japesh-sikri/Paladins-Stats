import React from 'react';
import PlayerCard from './PlayerCard';

const Home = props => {
    return (
        <div>
            <div className='header1'>
				<div className="ui input"><input id="search" type="text" placeholder="Search..."/></div>
				<div><button id="epicbutton" type="submit" onClick={props.apiCall} className="ui primary button">Search</button></div>
			</div>

			<div className="ui four column grid" style={{display: "flex", alignSelf: "center", width: "105%"}}>
				{
					props.count.map(data => {
						return <div className="column">
							<PlayerCard id={data.id} username={data.name} region={data.region} playtime={data.playtime} level={data.level} lastseen={data.seen.substr(0, 10)} />
						</div>
					})
				}
			</div>
        </div>
    )
}

export default Home;    
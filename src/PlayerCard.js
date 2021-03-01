import React from 'react';
import { Link } from 'react-router-dom';

const PlayerCard = props => {
    
    const details = () => {
        const id = `${props.id}-${props.username.replace(" ", "+")}`;
        console.log(id);
    }

    return(
        <div id={props.id} className="ui card" style={{marginTop: "15px", marginLeft: "15px"}}>
            <div className="content">
                <img src="https://img.pngio.com/paladins-icon-paladins-logo-png-free-transparent-png-download-paladins-logo-transparent-820_910.png" alt="" className="ui mini right floated image"/>
                <Link to={`/player/${props.id}-${props.username.replace(" ", "+")}`}>
                    <div className="header">{props.username}</div>
                </Link>
                <div className="meta">{props.region}</div>
                <div className="description">
                    Level: <strong>{props.level}</strong><br/>
                    Last seen: <strong>{props.lastseen}</strong><br/>
                    Playtime: <strong>{Math.round(props.playtime*10/6)/100} hours</strong>
                </div>
            </div>
        </div>

    )
}

export default PlayerCard;
import React from 'react';

const PlayerTable = props => {
    var color1, color2, url1, url2;
    if (props.type1 === 'Front Line') {
        color1 = 'yellow';
        color2 = 'blue';
        url1 = 'https://cdn.discordapp.com/attachments/753901700531748874/780136463772811275/casey-edwards-questclass-icons.png';
        url2 = 'https://cdn.discordapp.com/attachments/753901700531748874/780134236526739465/casey-edwards-questclass-icons22.png';
    } else {
        color1 = 'red';
        color2 = 'green';
        url1 = 'https://i.imgur.com/Mot5MkL_d.webp?maxwidth=728&fidelity=grand';
        url2 = 'https://cdn.discordapp.com/attachments/753901700531748874/780134540823494656/casey-edwards-questclass-icons11_1.png';
    }

    return(
        <div>
            <table className={`ui ${color1} table`}>
                <tbody className="">
                    <tr className="">
                        <td className="">
                            <div className={`ui ${color1} massive label`}>{props.type1}</div><br></br>
                            <div className={`ui ${color1} tiny label`}>{props.stats1.matches} games</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img src={url1} alt="" className="ui small image"></img></td>
                    </tr>
                    <tr className="">
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.duration}</div><div className="label">Playtimes</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.credits}</div><div className="label">Credits</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round((props.stats1.credits/props.stats1.duration)*100)/100}</div><div className="label">CPM</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round(((props.stats1.kills + props.stats1.assists/2)/props.stats1.deaths)*100)/100}</div><div className="label">KDA</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.kills}</div><div className="label">Kills</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.deaths}</div><div className="label">Deaths</div></div></td>
                        
                    </tr>
                    <tr className="">
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.assists}</div><div className="label">Assists</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.damage}</div><div className="label">Damage</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round((props.stats1.damage/props.stats1.duration)*100)/100}</div><div className="label">DPM</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.weapon}</div><div className="label">Weapon</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.taken}</div><div className="label">Taken</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.shielding}</div><div className="label">Shielding</div></div></td>
                    </tr>
                    <tr className="">
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.healing}</div><div className="label">Healing</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.selfHealing}</div><div className="label">Self-Healing</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.objectiveTime}</div><div className="label">Objective time</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.wins}</div><div className="label">Wins</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats1.loses}</div><div className="label">Losses</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round((props.stats1.wins/props.stats1.loses)*100)/100}</div><div className="label">Win/Lose Ratio</div></div></td>
                    </tr>
                </tbody>
            </table>
            <table className={`ui ${color2} table`}>
            <tbody className="">
                    <tr className="">
                        <td className="">
                            <div className={`ui ${color2} massive label`}>{props.type2}</div><br></br>
                            <div className={`ui ${color2} tiny label`}>{props.stats2.matches} games</div>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><img src={url2} alt="" className="ui small image"></img></td>
                    </tr>
                    <tr className="">
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.duration}</div><div className="label">Playtimes</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.credits}</div><div className="label">Credits</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round((props.stats2.credits/props.stats2.duration)*100)/100}</div><div className="label">CPM</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round(((props.stats2.kills + props.stats2.assists/2)/props.stats2.deaths)*100)/100}</div><div className="label">KDA</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.kills}</div><div className="label">Kills</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.deaths}</div><div className="label">Deaths</div></div></td>
                        
                    </tr>
                    <tr className="">
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.assists}</div><div className="label">Assists</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.damage}</div><div className="label">Damage</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round((props.stats2.damage/props.stats2.duration)*100)/100}</div><div className="label">DPM</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.weapon}</div><div className="label">Weapon</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.taken}</div><div className="label">Taken</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.shielding}</div><div className="label">Shielding</div></div></td>
                    </tr>
                    <tr className="">
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.healing}</div><div className="label">Healing</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.selfHealing}</div><div className="label">Self-Healing</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.objectiveTime}</div><div className="label">Objective time</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.wins}</div><div className="label">Wins</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{props.stats2.loses}</div><div className="label">Losses</div></div></td>
                        <td className=""><div className="ui statistic"><div className="value">{Math.round((props.stats2.wins/props.stats2.loses)*100)/100}</div><div className="label">Win/Lose Ratio</div></div></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlayerTable;
import React, { useState, useEffect } from 'react';
import PlayerTable from './PlayerTable';
import PlayerTable2 from './PlayerTable2';
import { useLocation } from 'react-router-dom';
const axios = require("axios");

const DetailsPage = props => {
    
    const FrontLine = [2404, 2288, 2528, 2071, 2073, 2322, 2348, 2479, 2512, 2477, 2149]
    const Flank = [2493, 2205, 2536, 2420, 2362, 2303, 2147, 2094, 2472, 2338, 2057]
    const Healer = [2533, 2372, 2491, 2267, 2431, 2254, 2093, 2481, 2517, 2056]
    const Damage = [2307, 2285, 2092, 2277, 2249, 2438, 2480, 2529, 2314, 2417, 2495, 2281, 2393, 2509]

    const location = useLocation();

    const [state, setState] = useState({
        FrontLineStats : {},
        FlankStats : {},
        HealerStats: {},
        DamageStats: {}
    });

    var FrontLineStats = {
        matches: 0,
        damage: 0,
        assists: 0,
        kills: 0,
        deaths: 0,
        healing: 0,
        selfHealing: 0,
        objectiveTime: 0,
        wins: 0,
        loses: 0,
        credits: 0,
        duration: 0,
        taken: 0,
        weapon: 0,
        shielding: 0
    };
    var FlankStats = {
        matches: 0,
        damage: 0,
        assists: 0,
        kills: 0,
        deaths: 0,
        healing: 0,
        selfHealing: 0,
        objectiveTime: 0,
        wins: 0,
        loses: 0,
        credits: 0,
        duration: 0,
        taken: 0,
        weapon: 0,
        shielding: 0
    };
    var HealerStats = {
        matches: 0,
        damage: 0,
        assists: 0,
        kills: 0,
        deaths: 0,
        healing: 0,
        selfHealing: 0,
        objectiveTime: 0,
        wins: 0,
        loses: 0,
        credits: 0,
        duration: 0,
        taken: 0,
        weapon: 0,
        shielding: 0
    };
    var DamageStats = {
        matches: 0,
        damage: 0,
        assists: 0,
        kills: 0,
        deaths: 0,
        healing: 0,
        selfHealing: 0,
        objectiveTime: 0,
        wins: 0,
        loses: 0,
        credits: 0,
        duration: 0,
        taken: 0,
        weapon: 0,
        shielding: 0
    };

    const apiCall = async () => {
        const USER_ID = location.pathname.substr(8);
        const USER_NAME = USER_ID.substr(10);
		const URL = `https://api.paladins.guru/v3/profiles/${USER_ID}/matches`;
        const { data } = await axios.default.get(URL);
        const max = data.matches.cursor.max;
        console.log('hello hello')

        for (var page = 1; page <= max; page++) {
            var data1 = await axios.default.get(URL, { params: { page } });
            data1 = data1.data;
            data1.matches.data.map(match => {
                const winner = match.winning_team;
                const duration = match.duration;
                match.players.map(player => {
                    if (player.name === USER_NAME) {
                        FrontLine.map(champion => {
                            if (player.champion === champion) {
                                FrontLineStats.matches += 1;
                                FrontLineStats.damage += player.damage;
                                FrontLineStats.assists += player.assists;
                                FrontLineStats.kills += player.kills;
                                FrontLineStats.deaths += player.deaths;
                                FrontLineStats.healing += player.healing;
                                FrontLineStats.selfHealing += player.self_healing;
                                FrontLineStats.objectiveTime += player.objective_time;
                                FrontLineStats.credits += player.gold;
                                FrontLineStats.duration += duration;
                                FrontLineStats.taken += player.taken;
                                FrontLineStats.shielding += player.shielding;
                                if (winner === player.team) {
                                    FrontLineStats.wins += 1;
                                } else {
                                    FrontLineStats.loses += 1;
                                }
                            }
                        })
                        Flank.map(champion => {
                            if (player.champion === champion) {
                                FlankStats.matches += 1;
                                FlankStats.damage += player.damage;
                                FlankStats.assists += player.assists;
                                FlankStats.kills += player.kills;
                                FlankStats.deaths += player.deaths;
                                FlankStats.healing += player.healing;
                                FlankStats.selfHealing += player.self_healing;
                                FlankStats.objectiveTime += player.objective_time;
                                FlankStats.credits += player.gold;
                                FlankStats.duration += duration;
                                FlankStats.taken += player.taken;
                                FlankStats.shielding += player.shielding;
                                if (winner === player.team) {
                                    FlankStats.wins += 1;
                                } else {
                                    FlankStats.loses += 1;
                                }
                            }
                        })
                        Healer.map(champion => {
                            if (player.champion === champion) {
                                HealerStats.matches += 1;
                                HealerStats.damage += player.damage;
                                HealerStats.assists += player.assists;
                                HealerStats.kills += player.kills;
                                HealerStats.deaths += player.deaths;
                                HealerStats.healing += player.healing;
                                HealerStats.selfHealing += player.self_healing;
                                HealerStats.objectiveTime += player.objective_time;
                                HealerStats.credits += player.gold;
                                HealerStats.taken += player.taken;
                                HealerStats.shielding += player.shielding;
                                HealerStats.duration += duration;
                                if (winner === player.team) {
                                    HealerStats.wins += 1;
                                } else {
                                    HealerStats.loses += 1;
                                }
                            }
                        })
                        Damage.map(champion => {
                            if (player.champion === champion) {
                                DamageStats.matches += 1;
                                DamageStats.damage += player.damage;
                                DamageStats.assists += player.assists;
                                DamageStats.kills += player.kills;
                                DamageStats.deaths += player.deaths;
                                DamageStats.healing += player.healing;
                                DamageStats.selfHealing += player.self_healing;
                                DamageStats.objectiveTime += player.objective_time;
                                DamageStats.credits += player.gold;
                                DamageStats.taken += player.taken;
                                DamageStats.shielding += player.shielding;
                                DamageStats.duration += duration;
                                if (winner === player.team) {
                                    DamageStats.wins += 1;
                                } else {
                                    DamageStats.loses += 1;
                                }
                            }
                        })
                    }
                });
            });
        }

        setState({
            FrontLineStats: FrontLineStats,
            FlankStats: FlankStats,
            HealerStats: HealerStats,
            DamageStats: DamageStats
        })
        console.log(state)
    }
    
    useEffect(() => {
        apiCall();
    })

    return (
        <div>
            <div className="ui grid">
                <div className="sixteen wide column">
                    <PlayerTable type1="Front Line" type2="Support" stats1={state.FrontLineStats} stats2={state.HealerStats} />
                </div>
                <div className="sixteen wide column">
                    <PlayerTable type1="Damage" type2="Flanker" stats1={state.DamageStats} stats2={state.FlankStats} />
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;    
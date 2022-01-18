import React from 'react'

const Statistics = (props) => {
    
    const {item} = props
    // console.log('stats props', item)

    const loaded = () => {

        return (
            item.map((user) => {
                // console.log('mapped data', user)

                return (
                    <div key={user.id}>
                        <h2>Basic Info</h2>
                        <h4>Name: {user.in_game_name}</h4>
                        <h4>Allegiance: {user.allegiance}</h4>
                        <h4>Keep: {user.keep_level}</h4>
                        <h4>House: {user.house_level}</h4>
                        <h4>Power: {user.power_level}</h4>

                        <h2>Power</h2>
                        <h4>Building Power: {user.building_power}</h4>
                        <h4>Research Power: {user.research_power}</h4>
                        <h4>Troop Power: {user.troop_power}</h4>
                        <h4>Dragon Talent Power: {user.dragon_talent_power}</h4>
                        <h4>Armory Power: {user.armory_power}</h4>

                        <h2>Infantry</h2>
                        <h4>Attack: {user.statistics[0].inf_attack}</h4>
                        <h4>Defense: {user.statistics[0].inf_defense}</h4>
                        <h4>Health: {user.statistics[0].inf_health}</h4>
                        <h4>Attack Vs Player: {user.statistics[0].inf_attack_vs_player}%</h4>
                        <h4>Defense Vs Player: {user.statistics[0].inf_defense_vs_player}</h4>
                        <h4>Health Vs Player: {user.statistics[0].inf_health_vs_player}%</h4>
                        <h4>Attack Vs Player's Infantry: {user.statistics[0].inf_attack_vs_players_inf}%</h4>
                        <h4>Attack Vs Player's Ranged: {user.statistics[0].inf_attack_vs_players_ranged}%</h4>
                        <h4>Attack Vs Player's Cavalry: {user.statistics[0].inf_attack_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Cavalry: {user.statistics[0].inf_defense_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Infantry: {user.statistics[0].inf_defense_vs_players_inf}%</h4>
                        <h4>Defense Vs Player's Ranged: {user.statistics[0].inf_defense_vs_players_ranged}%</h4>
                        <h4>Defense Vs Player's Siege: {user.statistics[0].inf_defense_vs_players_siege}%</h4>
                        
                        <h2>Cavalry</h2>
                        <h4>Attack: {user.statistics[0].cav_attack}%</h4>
                        <h4>Defense: {user.statistics[0].cav_defense}%</h4>
                        <h4>Health: {user.statistics[0].cav_health}%</h4>
                        <h4>Attack Vs Player: {user.statistics[0].cav_attack_vs_player}%</h4>
                        <h4>Defense Vs Player: {user.statistics[0].cav_defense_vs_player}%</h4>
                        <h4>Health Vs Player: {user.statistics[0].cav_health_vs_player}%</h4>
                        <h4>Attack Vs Player's Infantry: {user.statistics[0].cav_attack_vs_players_inf}%</h4>
                        <h4>Attack Vs Player's Ranged: {user.statistics[0].cav_attack_vs_players_ranged}%</h4>
                        <h4>Attack Vs Player's Cavalry: {user.statistics[0].cav_attack_vs_players_cav}%</h4>
                        <h4>Attack Vs Player's Siege: {user.statistics[0].cav_attack_vs_players_siege}%</h4>
                        <h4>Defense Vs Player's Cavalry: {user.statistics[0].cav_defense_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Infantry: {user.statistics[0].cav_defense_vs_players_inf}%</h4>
                        <h4>Defense Vs Player's Ranged: {user.statistics[0].cav_defense_vs_players_ranged}%</h4>
                        <h4>Defense Vs Player's Siege: {user.statistics[0].cav_defense_vs_players_siege}%</h4>
                        
                        <h2>Ranged</h2>
                        <h4>Attack: {user.statistics[0].ranged_attack}%</h4>
                        <h4>Defense: {user.statistics[0].ranged_defense}%</h4>
                        <h4>Health: {user.statistics[0].ranged_health}%</h4>
                        <h4>Attack Vs Player: {user.statistics[0].ranged_attack_vs_player}%</h4>
                        <h4>Defense Vs Player: {user.statistics[0].range_defense_vs_player}%</h4>
                        <h4>Health Vs Player: {user.statistics[0].ranged_health_vs_player}%</h4>
                        <h4>Attack Vs Player's Infantry: {user.statistics[0].ranged_attack_vs_players_inf}%</h4>
                        <h4>Attack Vs Player's Ranged: {user.statistics[0].ranged_attack_vs_players_ranged}%</h4>
                        <h4>Attack Vs Player's Cavalry: {user.statistics[0].ranged_attack_vs_players_cav}%</h4>
                        <h4>Attack Vs Player's Siege: {user.statistics[0].ranged_attack_vs_players_siege}%</h4>
                        <h4>Defense Vs Player's Cavalry: {user.statistics[0].ranged_defense_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Infantry: {user.statistics[0].ranged_defense_vs_players_inf}%</h4>
                        <h4>Defense Vs Player's Ranged: {user.statistics[0].ranged_defense_vs_players_ranged}%</h4>
                        <h4>Defense Vs Player's Siege: {user.statistics[0].ranged_defense_vs_players_siege}%</h4>
                    </div>
                )
            })
        )
    }

    const loading = () => {
        return(
            <h1>Loading...</h1>
        )
    }

    return item.length > 0 ? loaded() : loading()
}

export default Statistics

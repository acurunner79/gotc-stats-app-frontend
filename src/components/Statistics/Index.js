import React, { useState, useEffect } from 'react'

const Statistics = () => {

    const gotcStatsApi = 'https://gotc-stat-app.herokuapp.com/'

    const endpoint = "users"

    const [statsData, setStatsData] = useState(null)

    const getStatsData = async () => {
        const response = await fetch(`${gotcStatsApi}${endpoint}`)
        const data = await response.json()
        setStatsData(data)
    // console.log('Stats data',statsData)
    }

    useEffect(() => {
        getStatsData()
    }, [])

    const loaded = () => {

        return (
            statsData.map((item, index) => {
                // console.log('mapped data', item)

                return (
                    <div key={index}>
                        <h2>Basic Info</h2>
                        <h4>Name: {item.in_game_name}</h4>
                        <h4>Allegiance: {item.allegiance}</h4>
                        <h4>Keep: {item.keep_level}</h4>
                        <h4>House: {item.house_level}</h4>
                        <h4>Power: {item.power_level}</h4>

                        <h2>Power</h2>
                        <h4>Building Power: {item.building_power}</h4>
                        <h4>Research Power: {item.research_power}</h4>
                        <h4>Troop Power: {item.troop_power}</h4>
                        <h4>Dragon Talent Power: {item.dragon_talent_power}</h4>
                        <h4>Armory Power: {item.armory_power}</h4>

                        <h2>Infantry</h2>
                        <h4>Attack: {item.statistics[0].inf_attack}</h4>
                        <h4>Defense: {item.statistics[0].inf_defense}</h4>
                        <h4>Health: {item.statistics[0].inf_health}</h4>
                        <h4>Attack Vs Player: {item.statistics[0].inf_attack_vs_player}%</h4>
                        <h4>Defense Vs Player: {item.statistics[0].inf_defense_vs_player}</h4>
                        <h4>Health Vs Player: {item.statistics[0].inf_health_vs_player}%</h4>
                        <h4>Attack Vs Player's Infantry: {item.statistics[0].inf_attack_vs_players_inf}%</h4>
                        <h4>Attack Vs Player's Ranged: {item.statistics[0].inf_attack_vs_players_ranged}%</h4>
                        <h4>Attack Vs Player's Cavalry: {item.statistics[0].inf_attack_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Cavalry: {item.statistics[0].inf_defense_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Infantry: {item.statistics[0].inf_defense_vs_players_inf}%</h4>
                        <h4>Defense Vs Player's Ranged: {item.statistics[0].inf_defense_vs_players_ranged}%</h4>
                        <h4>Defense Vs Player's Siege: {item.statistics[0].inf_defense_vs_players_siege}%</h4>
                        
                        <h2>Cavalry</h2>
                        <h4>Attack: {item.statistics[0].cav_attack}%</h4>
                        <h4>Defense: {item.statistics[0].cav_defense}%</h4>
                        <h4>Health: {item.statistics[0].cav_health}%</h4>
                        <h4>Attack Vs Player: {item.statistics[0].cav_attack_vs_player}%</h4>
                        <h4>Defense Vs Player: {item.statistics[0].cav_defense_vs_player}%</h4>
                        <h4>Health Vs Player: {item.statistics[0].cav_health_vs_player}%</h4>
                        <h4>Attack Vs Player's Infantry: {item.statistics[0].cav_attack_vs_players_inf}%</h4>
                        <h4>Attack Vs Player's Ranged: {item.statistics[0].cav_attack_vs_players_ranged}%</h4>
                        <h4>Attack Vs Player's Cavalry: {item.statistics[0].cav_attack_vs_players_cav}%</h4>
                        <h4>Attack Vs Player's Siege: {item.statistics[0].cav_attack_vs_players_siege}%</h4>
                        <h4>Defense Vs Player's Cavalry: {item.statistics[0].cav_defense_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Infantry: {item.statistics[0].cav_defense_vs_players_inf}%</h4>
                        <h4>Defense Vs Player's Ranged: {item.statistics[0].cav_defense_vs_players_ranged}%</h4>
                        <h4>Defense Vs Player's Siege: {item.statistics[0].cav_defense_vs_players_siege}%</h4>
                        
                        <h2>Ranged</h2>
                        <h4>Attack: {item.statistics[0].ranged_attack}%</h4>
                        <h4>Defense: {item.statistics[0].ranged_defense}%</h4>
                        <h4>Health: {item.statistics[0].ranged_health}%</h4>
                        <h4>Attack Vs Player: {item.statistics[0].ranged_attack_vs_player}%</h4>
                        <h4>Defense Vs Player: {item.statistics[0].range_defense_vs_player}%</h4>
                        <h4>Health Vs Player: {item.statistics[0].ranged_health_vs_player}%</h4>
                        <h4>Attack Vs Player's Infantry: {item.statistics[0].ranged_attack_vs_players_inf}%</h4>
                        <h4>Attack Vs Player's Ranged: {item.statistics[0].ranged_attack_vs_players_ranged}%</h4>
                        <h4>Attack Vs Player's Cavalry: {item.statistics[0].ranged_attack_vs_players_cav}%</h4>
                        <h4>Attack Vs Player's Siege: {item.statistics[0].ranged_attack_vs_players_siege}%</h4>
                        <h4>Defense Vs Player's Cavalry: {item.statistics[0].ranged_defense_vs_players_cav}%</h4>
                        <h4>Defense Vs Player's Infantry: {item.statistics[0].ranged_defense_vs_players_inf}%</h4>
                        <h4>Defense Vs Player's Ranged: {item.statistics[0].ranged_defense_vs_players_ranged}%</h4>
                        <h4>Defense Vs Player's Siege: {item.statistics[0].ranged_defense_vs_players_siege}%</h4>
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

    return statsData ? loaded() : loading()
}

export default Statistics

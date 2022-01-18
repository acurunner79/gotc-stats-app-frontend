import React, { useState } from 'react'

const Form = (props) => {
    // console.log('form propss', props)

    const [formData, setFormData] = useState(props.item)
    // console.log('form dataa', formData)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleSubmit(formData)
        props.history.push("/")
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>BASIC INFO</h2>
            <input
                type="text"
                name="username"
                placeholder='username'
                value={formData.username}
                onChange={handleChange}
                />
            <input
                type="password"
                name="password"
                placeholder='password'
                value={formData.password}
                onChange={handleChange}
                />
            <input
                type="text"
                name="in_game_name"
                placeholder='In-game name'
                value={formData.in_game_name}
                onChange={handleChange}
                />
            <input
                type="text"
                name="allegiance"
                placeholder='Allegiance'
                value={formData.allegiance}
                onChange={handleChange}
                />
            <input
                type="text"
                name="keep_level"
                placeholder='Keep level'
                value={formData.keep_level}
                onChange={handleChange}
                />
            <input
                type="text"
                name="house_level"
                placeholder='House level'
                value={formData.house_level}
                onChange={handleChange}
                />
            <input
                type="text"
                name="power_level"
                placeholder='Power level'
                value={formData.power_level}
                onChange={handleChange}
                />
                <br />
                <h2>POWER</h2>
            <input
                type="text"
                name="building_power"
                placeholder='Building power'
                value={formData.building_power}
                onChange={handleChange}
                />
            <input
                type="text"
                name="research_power"
                placeholder='Research power'
                value={formData.research_power}
                onChange={handleChange}
                />
            <input
                type="text"
                name="troop_power"
                placeholder='Troop power'
                value={formData.troop_power}
                onChange={handleChange}
                />
            <input
                type="text"
                name="dragon_talent_power"
                placeholder='Dragon talent power'
                value={formData.dragon_talent_power}
                onChange={handleChange}
                />
            <input
                type="text"
                name="armory_power"
                placeholder='Armory power'
                value={formData.armory_power}
                onChange={handleChange}
                />
                <br/>
            <input type="submit" value={props.label}/>
        </form>
    )
}

export default Form

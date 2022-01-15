import React from 'react'
import { Link } from 'react-router-dom'

const Topnav = () => {
    return (
        <div>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/dashboard">
                    <li>Dashboard</li>
                </Link>
                <Link to="/preferences">
                    <li>Preferences</li>
                </Link>
                <Link to="/stats">
                    <li>Statistics</li>
                </Link>
            </ul>
        </div>
    )
}

export default Topnav

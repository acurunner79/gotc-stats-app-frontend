import React from 'react'
import Topnav from '../Nav/Topnav'


const Login = () => {
    return (
        <>
        <Topnav />
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}

export default Login

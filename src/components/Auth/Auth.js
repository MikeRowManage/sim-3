import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }

    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = () => {
        const {username, password} = this.state
        axios.post('/api/login', {
            username,
            password
             }).then(res => {
                 this.props.getUser(res.data)
                 this.props.history.push('/dashboard')
             }).catch(err => console.log(err))
    }

    handleRegister = () => {
        const {username, password} = this.state
        axios.post('/api/register', {
            username,
            password
        }).then(res => {
            this.props.getUser(res.data)
            this.props.history.push('/dashboard')
        }).catch(err => console.log(err))
    }

    render() {
        return(
        <div>
            <input 
                placeholder="Enter Username"
                name="username"
                onChange={this.handleInput}
            />
            <input 
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={this.handleInput}
            />
            <button onClick={this.handleRegister}>Register</button>
            <button onClick={this.handleLogin}>Login</button>
        </div>
        )
    }
}

export default connect(null, {getUser})(Auth)
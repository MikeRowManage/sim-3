import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Post from '../Post/Post'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            search: '',
            userPosts: true
        }

    }

    componentDidMount = () => {
        this.getAllPosts()
    }

    getAllPosts = () => {
        // console.log(this.props)
        axios.get(`/api/posts/${this.props.user.user_id}?search=${this.state.search}&userPosts=${this.state.userPosts}`).then(res => {
            this.setState({
                posts: res.data
            })
        // console.log(res.data)
        }).catch(err => console.log(err))
    }


    resetSearch = () => {
        axios.get(`/api/posts/${this.props.user.user_id}?search=${this.state.search}&userPosts=${this.state.userPosts}`).then(res => {
            this.setState({
            posts: res.data,    
            search: ''
        })
        }).catch(err => console.log(err))
        
    }

    handleInput = e => {
        this.setState({
            search: e.target.value
        })
    }

    toggleUserPosts = e => {
       this.setState({
           userPosts: !e.target.value
       })
    }

    render() {
        // console.log(this.props)
        const postsList = this.state.posts.map(() => {
            return <Link to='post/:post_id'> <Post /> </Link>
        })
        
        return (
            <div>
                <header>Dashboard</header>
                <input
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleInput}
                />
                <label><input 
                type="checkbox"
                value={this.state.userPosts}
                onClick={this.toggleUserPosts}
                />My Posts</label>
                <button onClick={this.getAllPosts}>Search</button>
                <button onClick={this.resetSearch}>Reset</button>
                {postsList}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {
        user
    }
}

export default connect(mapStateToProps)(Dashboard)
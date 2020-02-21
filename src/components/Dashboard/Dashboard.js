import React, {Component} from 'react'
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

    getAllPosts = () => {
        axios
    }

    resetSearch = () => {
        this.setState({
            search: ''
        })
    }

    render() {

        const postsList = this.state.posts.map(() => {
            return <Post />
        })

        return (
            <div>
                <header>Dashboard</header>
                <input
                    placeholder="Search"
                    value={this.state.search}
                />
                <label><input 
                type="checkbox"
                value={this.state.userPosts}
                />My Posts</label>
                <button>Search</button>
                <button onClick={this.resetSearch}>Reset</button>
            </div>
        )
    }
}

export default Dashboard
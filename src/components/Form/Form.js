import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            img: '',
            content: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitNewPost = () => {
        const {title, content, img} = this.state
        // console.log(this.props)
        axios.post(`/api/posts/${this.props.user.user_id}`, {title: title, content: content, img: img}).then(() => {
           this.props.history.push('/dashboard') 
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <input 
                    value={this.state.title}
                    placeholder='Enter Post Title'
                    name='title'
                    onChange={this.handleInput}
                />
                <img style={{ height: '50px', width: '50px', url: this.state.profile_pic }} alt='' />
                <input
                    value={this.state.img}
                    placeholder='Upload Image'
                    name='img'
                    onChange={this.handleInput}
                 />
                 <input
                    value={this.state.content}
                    placeholder='Enter Your Post'
                    name='content'
                    onChange={this.handleInput}
                  />
                  <button onClick={this.submitNewPost}>Post</button>
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

export default connect(mapStateToProps)(Form)
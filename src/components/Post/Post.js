import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPicture: ''
        }
    }

    getOnePost = () => {
        axios.get(`/api/posts/${this.props.match.post_id}`).then(res => {
            this.setState({
                title: res.data.title,
                img: res.data.img,
                content: res.data.content,
                author: res.data.username,
                authorPicture: res.data.profile_pic
            })
            console.log(res.data)
        }).catch(err => console.log(err))
    }

    render() {
            console.log(this.state.title)
        return (
            <div style={{ width: '100px', height: '100px'}}>
                <h2>{this.state.title}</h2>
                <img style={{ url: this.state.img}} alt=""/>
                <p>{this.state.content}</p>
                <h3>{this.state.username}</h3>
                <img style={{ url: this.state.profile_pic}} alt='' />
            </div>
        )
    }
}

export default Post
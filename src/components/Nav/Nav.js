import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Nav = (props) => {
   
    
            console.log(props)
        return (
            <div>
                <div>
                <p>{props.user.username}</p>
                {props.user.profile_pic}
                </div>
                <button>
                <Link to='/dashboard'>Home</Link>
                </button>
                <button>
                <Link to='/post/:postid'>New Post</Link>
                </button>
                <button>
                <Link to='/'>Logout</Link>
                </button>
                
            </div>
        )
    
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {
        user
    }
}

export default connect(mapStateToProps)(Nav)
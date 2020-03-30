import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Nav = (props) => {
   
        return (
            <div>
                <div>
                <p>{props.user.username}</p>
                <img style={{ url: props.user.profile_pic }} alt='' />
                </div>
                <button>
                <Link to='/dashboard'>Home</Link>
                </button>
                <button>
                <Link to='/new'>New Post</Link>
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
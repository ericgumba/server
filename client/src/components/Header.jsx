import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
    renderContent(){ 
        switch(this.props.auth) {
            case null:
                return 
            case false:
                return (
                    <li>
                        <a href="/auth/google">
                            Login with Google
                        </a>
                    </li>
                )
            default:
                return [
                    <li key='0' > <Payments/ > </li>,
                    <li key='2' style={{ margin: '0 10px' }}> 
                        <a className='btn'> Credits: {this.props.auth.credits} </a>
                    </li>,
                    <li key='1' >
                        <a href="/api/logout" className='btn' style={{background: "blue"}} > 
                            logout
                        </a>
                    </li>
                ]
                
        }
    }

    render(){
        console.log(this.props)
        return(
        <nav>
            <div className="nav-wrapper">
                <Link 
                    to={ this.props.auth ? '/surveys' : '/'} 
                    className="left brand-logo"
                >
                    emaily
                </Link>
                <ul id="nav-mobile" className="right">
                    
                        {this.renderContent()}
                    
                 </ul>
            </div>
        </nav>
        )
            
    }

}
function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header) // connects to redux store
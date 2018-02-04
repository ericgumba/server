import React, { Component } from 'react'
import { connect } from 'react-redux'

class Header extends Component {
    renderContent(){
        console.log(this.props.auth)
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
                return (
                    <li>
                        <a href="/api/logout"> 
                        logout
                        </a>
                    </li>)

        }
    }

    render(){
        console.log(this.props)
        return(
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="left brand-logo">
                    emaily
                </a>
                <ul id="nav-mobile" className="right">
                    <li>
                        {this.renderContent()}
                    </li> 
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
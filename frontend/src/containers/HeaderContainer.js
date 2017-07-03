import React , { Component, PropTypes } from 'react';
import { GoogleLogin } from 'react-google-login-component';
import LoginComponent from '../components/header/LoginComponent';
import { Link } from 'react-router'

class HeaderContainer extends React.Component {

    static get propTypes() {
        return {
            userActions: PropTypes.func.isRequired,
            actions: PropTypes.func.isRequired
        };
    }

    onLogoutBtnClick(e) {
       // this.props.userActions.logoutUser();
    }

    responseGoogle (googleUser) {
        let access_token = googleUser.getAuthResponse().access_token;
        this.props.userActions.loadUserInfo(access_token);
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <Link to={`/presentations/`}>
                            <p className="navbar-brand">Little version of google presentation</p>
                        </Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="presentations/new">Create presentation</Link>
                        </li>
                    </ul>
                    <div id="navbar" className="navbar-collapse collapse">
                        <LoginComponent
                            responseHandler={this.responseGoogle.bind(this)}
                            user={this.props.user}
                            logout={this.onLogoutBtnClick.bind(this)} />
                    </div>
                </div>
            </nav>
        );
    }
}


export default HeaderContainer;

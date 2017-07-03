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

    onGetBtnClick(e) {
        this.props.actions.loadPresentations();
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
                        {/*<button className='btn' onClick={this.onGetBtnClick.bind(this)}>loadPresentations</button>*/}
                        {/*List my presentations*/}
                    <div id="navbar" className="navbar-collapse collapse">
                        {/*<div>{this.props.user.given_name}</div>*/}
                        <LoginComponent responseHandler={this.responseGoogle.bind(this)} user={this.props.user} />
                    </div>
                </div>
            </nav>
        );
    }
}


export default HeaderContainer;

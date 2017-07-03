import React , { PropTypes, Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';

class LoginComponent extends Component {

    render() {
        let name = this.props.user.given_name;
        let family = this.props.user.family_name;
        let userName = name === undefined ? null : name + ' ' + family;

        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <p className="user-name">{userName}</p>
                </li>
                {userName ? (
                    <li>
                        <button type="button" className="btn btn-danger" onClick={this.props.logout()}>Log out</button>
                    </li>
                ) : (
                    <li>
                        <GoogleLogin socialId="974978258856-arqfdldlm48f2v0ghvmqn7cs3ld511jd.apps.googleusercontent.com"
                             scope="profile"
                             class="btn btn-danger"
                             responseHandler={this.props.responseHandler}
                             buttonText="Login With Google"/>
                    </li>
                )}
            </ul>
        );
    }
}


export default LoginComponent;

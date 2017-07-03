import React , { PropTypes, Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';

class LoginComponent extends Component {

    render() {
        let userName = this.props.user ? this.props.user.given_name + ' ' + this.props.user.family_name : " ";
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <p>{userName}</p>
                </li>
                <li>
                <GoogleLogin socialId="974978258856-arqfdldlm48f2v0ghvmqn7cs3ld511jd.apps.googleusercontent.com"
                             scope="profile"
                             class="btn btn-danger"
                             responseHandler={this.props.responseHandler}
                             buttonText="Login With Google"/>
                </li>
            </ul>
        );
    }
}


export default LoginComponent;

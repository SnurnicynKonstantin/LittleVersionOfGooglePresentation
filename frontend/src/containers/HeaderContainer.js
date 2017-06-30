import React , { PropTypes, Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

    onGetBtnClick(e) {
        this.props.actions.loadPresentations();
    }

    responseGoogle (googleUser) {
        var access_token = googleUser.getAuthResponse().access_token;
        this.props.userActions.loadUserInfo(access_token);
    }

    render() {
        return (
            <div>
                <h1>Little version of google presentation</h1>
                <button className='btn' onClick={this.onGetBtnClick.bind(this)}>loadPresentations</button>
                {/*List my presentations*/}
                <div>{this.props.user.given_name}</div>
                <GoogleLogin socialId="974978258856-arqfdldlm48f2v0ghvmqn7cs3ld511jd.apps.googleusercontent.com"
                             className="google-login"
                             scope="profile"
                             responseHandler={this.responseGoogle.bind(this)}
                             buttonText="Login With Google"/>
            </div>
        );
    }
}


export default HeaderContainer;

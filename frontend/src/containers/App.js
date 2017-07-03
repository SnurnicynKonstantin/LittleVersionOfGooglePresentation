import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Header from './HeaderContainer';
import * as presentationActions from '../actions/presentationActions';
import * as userActions from '../actions/userActions';

// import s from '../styles/scss/App.scss';
require("!style-loader!css-loader!sass-loader!../styles/scss/App.scss");

class App extends React.Component {

    render() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(presentationActions, dispatch);
        const userAction = bindActionCreators(userActions, dispatch);

        return (
            <div>
                <Header user = {this.props.user.user} actions = {actions} userActions = {userAction}/>
                <h1>App</h1>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps (state) {
    console.log("state in App", state);
    return {
        user: state.users
    };
}

export default connect(mapStateToProps)(App);

import React , { PropTypes, Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Header from './HeaderContainer';
import * as presentationActions from '../actions/presentationActions';
import * as userActions from '../actions/userActions';

require("!style-loader!css-loader!sass-loader!../styles/scss/App.scss");

class App extends Component {

    render() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(presentationActions, dispatch);
        const userAction = bindActionCreators(userActions, dispatch);

        return (
            <div>
                <Header user = {this.props.user} actions = {actions} userActions = {userAction}/>
                <h1>App</h1>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired
};

function mapStateToProps (state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(App);

import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Header from './HeaderContainer';
import * as presentationActions from '../actions/presentationActions';

class App extends React.Component {

    render() {
        const { dispatch } = this.props;
        const actions = bindActionCreators(presentationActions, dispatch);

        return (
            <div>
                <Header user = {this.props.user} actions = {actions}/>
                <h1>App</h1>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: state
    };
}

export default connect(mapStateToProps)(App);

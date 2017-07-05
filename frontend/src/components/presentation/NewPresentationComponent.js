import React , { PropTypes, Component } from 'react';
import presentationApi from '../../api/presentationApi';
import { connect } from 'react-redux';
import * as presentationActions from '../../actions/presentationActions';
import {bindActionCreators} from 'redux';

class NewPresentationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', actions: {}};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

        const { dispatch } = this.props;
        const actions = bindActionCreators(presentationActions, dispatch);

        actions.createPresentation(this.state.value, this.props.user.email);
        this.props.history.push('/presentations');

        event.preventDefault();
    }

    render() {

        return (
            <div className="container">
                <h1> Create new presentation</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Subject</label>
                        <input type="text" className="form-control" id="subject" placeholder="Subject" onChange={this.handleChange}/>
                    </div>
                    <input type="submit" className="btn btn-default" value="Create" />
                </form>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(NewPresentationComponent);

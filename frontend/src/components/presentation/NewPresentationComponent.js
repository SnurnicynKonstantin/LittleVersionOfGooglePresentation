import React , { PropTypes, Component } from 'react';

class NewPresentationComponent extends Component {

    render() {
        return (
            <div className="well"><p>{this.props.presentationSubject}</p></div>
        );
    }
}


export default NewPresentationComponent;

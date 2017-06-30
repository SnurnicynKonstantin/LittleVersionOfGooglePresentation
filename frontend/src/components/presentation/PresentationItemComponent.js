import React , { PropTypes, Component } from 'react';

class PresentationItemComponent extends Component {

    render() {
        return (
            <div className="well"><p>{this.props.presentationSubject}</p></div>
        );
    }
}


export default PresentationItemComponent;

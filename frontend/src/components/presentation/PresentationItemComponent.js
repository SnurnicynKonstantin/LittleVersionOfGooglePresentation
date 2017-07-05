import React , { PropTypes, Component } from 'react';
import { Link } from 'react-router';

class PresentationItemComponent extends Component {

    render() {
        return (
            <Link to={`/presentations/${this.props.presentationInfo.id}`}>
                <div className="well"><p>{this.props.presentationInfo.subject}</p></div>
            </Link>
        );
    }
}

PresentationItemComponent.propTypes = {
    presentationInfo: PropTypes.object.isRequired
};

export default PresentationItemComponent;

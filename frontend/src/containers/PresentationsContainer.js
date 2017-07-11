import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PresentationItem from '../components/presentation/PresentationItemComponent';

class PresentationsContainer extends Component {

    render() {
        let presentations = [];
        let sharedPresentations = [];

        this.props.presentations.forEach(function(presentation) {
            if (presentation.shared)
                sharedPresentations.push(<div className="col-lg-4"><PresentationItem
                    presentationInfo={presentation}
                    key={presentation.id}
                /></div>);
            else
                presentations.push(<div className="col-lg-4"><PresentationItem
                    presentationInfo={presentation}
                    key={presentation.id}
                /></div>);
        });

        return (
            <div className="container">
                <h1>Your presentations:</h1>
                <div className="row">
                    {presentations}
                </div>
                <h1>Shared presentations:</h1>
                <div className="row">
                    {sharedPresentations}
                </div>
            </div>
        );
    }
}

PresentationsContainer.propTypes = {
    presentations: PropTypes.object.isRequired
};

function mapStateToProps (state) {
    return {
        presentations: state.presentations
    };
}

export default connect(mapStateToProps)(PresentationsContainer);

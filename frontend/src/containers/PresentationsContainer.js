import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PresentationItem from '../components/presentation/PresentationItemComponent';

class PresentationsContainer extends Component {

    render() {
        let rows = [];

        this.props.presentations.forEach(function(presentation) {
            rows.push(<div className="col-lg-4"><PresentationItem
                presentationInfo={presentation}
                key={presentation.id}
            /></div>);
        });

        return (
            <div className="container">
                <h1>Your presentations:</h1>
                <div className="row">
                    {rows}
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

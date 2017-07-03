import React from 'react';
import { connect } from 'react-redux';

class SlidesContainer extends React.Component {
    render() {
        console.log("Presentation", this.props.presentation);

        let subject = this.props.presentation ? this.props.presentation.subject : '';

        return (
            <div className="container">
                <h1>{subject}</h1>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    const presentationId = ownProps.params.id;
    return {
        presentation: state.presentations.presentations.filter(function(elem) {
            return elem.id == presentationId;
        })[0]
    };
}

export default connect(mapStateToProps)(SlidesContainer);

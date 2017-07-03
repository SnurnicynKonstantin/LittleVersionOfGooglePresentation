import React from 'react';
import { connect } from 'react-redux';
import PresentationItem from '../components/presentation/PresentationItemComponent';

class PresentationsContainer extends React.Component {

    render() {
        let rows = [];

        this.props.presentations.presentations.forEach(function(presentation) {
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

function mapStateToProps (state) {
    return {
        presentations: state.presentations
    };
}

export default connect(mapStateToProps)(PresentationsContainer);

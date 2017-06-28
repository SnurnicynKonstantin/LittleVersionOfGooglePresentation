import React from 'react';
import { connect } from 'react-redux';

class PresentationsContainer extends React.Component {
    render() {
        var rows = [];
        this.props.presentations.forEach(function(presentation) {
            rows.push(<li>{presentation.subject}</li>);
        });
        return (
            <div>
                <h1>Your presentations:</h1>
                <ul>
                    <li>Чебурашка</li>
                    {rows}
                </ul>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        presentations: state.presentations
    }
}

export default connect(mapStateToProps)(PresentationsContainer);

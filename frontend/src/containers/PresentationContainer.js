import React from 'react';
import { connect } from 'react-redux';
import PresentationItem from '../components/presentation/PresentationItemComponent';

class PresentationContainer extends React.Component {
    render() {
        let rows = [];
        this.props.presentations.presentations.forEach(function(presentation) {
            let subject = presentation.subject;
            rows.push(<div className="col-lg-4"><PresentationItem presentationSubject={subject} key={subject}/></div>);
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

export default connect(mapStateToProps)(PresentationContainer);

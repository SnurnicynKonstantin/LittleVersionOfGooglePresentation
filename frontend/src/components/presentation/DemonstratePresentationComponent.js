import React , { PropTypes, Component } from 'react';

class DemonstratePresentation extends Component {

    render() {

        return (
            <div className="container">
                <h1> {this.props.currentSlide.title}</h1>
                <p dangerouslySetInnerHTML={{__html: this.props.currentSlide.content}} />
            </div>
        );
    }
}


export default DemonstratePresentation;

import React , { PropTypes, Component } from 'react';
import { Link } from 'react-router'

class SlideItem extends Component {

    render() {
        return (
                <div className="well" onClick={this.props.changeSlideId.bind(this, this.props.slide.id)}>
                    <p>Title: {this.props.slide.title}</p>
                    <p>Content: {this.props.slide.content}</p>
                </div>
        );
    }
}

export default SlideItem;
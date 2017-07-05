import React , { PropTypes, Component } from 'react';
import { Link } from 'react-router'

class NewSlideItem extends Component {

    render() {
        return (
            <div className="well" onClick={this.props.changeSlideId.bind(this, 'new')}>
                <p>Create new slide</p>
            </div>
        );
    }
}

export default NewSlideItem;
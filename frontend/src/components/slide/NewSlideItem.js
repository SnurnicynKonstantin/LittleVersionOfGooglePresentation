import React , { PropTypes, Component } from 'react';

class NewSlideItem extends Component {

    render() {
        return (
            <div className="well" onClick={this.props.changeSlideId.bind(this, 'new')}>
                <p>Create new slide</p>
            </div>
        );
    }
}

NewSlideItem.propTypes = {
    changeSlideId: PropTypes.object.isRequired
};


export default NewSlideItem;
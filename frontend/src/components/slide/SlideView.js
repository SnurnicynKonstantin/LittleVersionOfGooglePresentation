import React , { PropTypes, Component } from 'react';

class SlideView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.slide.title,
            content: this.props.slide.content
        };

        this.titleChange = this.titleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.contentChange = this.contentChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        this.setState({title: nextProps.slide.title});
        this.setState({content: nextProps.slide.content});
    }

    titleChange(event) {
        this.setState({title: event.target.value});
    }

    contentChange(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit(event) {
        this.props.changeSlideHandler(this.state.title, this.state.content, this.props.slide.id);
        event.preventDefault();
    }

    render() {
        return (
            <div className="col-md-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.titleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Content"
                            value={this.state.content}
                            onChange={this.contentChange}
                        />
                    </div>
                    <input type="submit" className="btn btn-default" value="Change" />
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={this.props.deleteSlideHandler.bind(this, this.props.slide.id)}>
                        Delete
                    </button>
                </form>
            </div>
        );
    }
}

SlideView.propTypes = {
    slide: PropTypes.object.isRequired,
    changeSlideHandler: PropTypes.object.isRequired,
    deleteSlideHandler: PropTypes.object.isRequired
};

export default SlideView;
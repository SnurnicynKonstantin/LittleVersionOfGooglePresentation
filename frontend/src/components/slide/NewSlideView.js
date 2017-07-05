import React , { PropTypes, Component } from 'react';

class NewSlideView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        };

        this.titleChange = this.titleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.contentChange = this.contentChange.bind(this);
    }

    titleChange(event) {
        this.setState({title: event.target.value});
    }

    contentChange(event) {
        this.setState({content: event.target.value});
    }

    handleSubmit(event) {
        this.props.changeSlideHandler(this.state.title, this.state.content);
        this.setState({title: ''});
        this.setState({content: ''});
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
                            onChange={this.titleChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Content"
                            onChange={this.contentChange}
                            value={this.state.content}

                        />
                    </div>
                    <input type="submit" className="btn btn-default" value="Create" />
                </form>
            </div>
        );
    }
}

NewSlideView.propTypes = {
    changeSlideHandler: PropTypes.object.isRequired
};


export default NewSlideView;

import React , { PropTypes, Component } from 'react';
import { Link } from 'react-router'

class SlideView extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', actions: {}};

        this.titleChange = this.titleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    titleChange(event) {
        this.setState({value: event.target.value});
    }

    contentChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {

    }

    render() {
        return (
            <div className="col-md-4">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="Title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Title"
                            value={this.props.slide.title}
                        />
                    </div>
                    <div className="form-group">
                        <label for="Content">Content</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Content"
                            value={this.props.slide.content}
                        />
                    </div>
                    <input type="submit" className="btn btn-default" value="Change" />
                </form>
            </div>
        );
    }
}

export default SlideView;

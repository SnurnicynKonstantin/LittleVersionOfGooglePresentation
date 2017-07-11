import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as slideActions from '../actions/slideActions';
import * as presentationActions from '../actions/presentationActions';
import * as userActions from '../actions/userActions';
import {bindActionCreators} from 'redux';
import SlideList from '../components/slide/SlideList';
import SlideView from '../components/slide/SlideView';
import NewSlideView from '../components/slide/NewSlideView';

class SlidesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentSlideId: 'new',
            gmailToShare: ''
        };
        let { dispatch } = this.props;
        this.slideActions = bindActionCreators(slideActions, dispatch);
        this.presentationActions = bindActionCreators(presentationActions, dispatch);
        this.userActions = bindActionCreators(userActions, dispatch);
    }

    componentWillMount() {
        this.slideActions.loadSlides(this.props.presentation.id);
    }

    changeCurrentSlideId(id) {
        this.setState({currentSlideId: id});
    }

    changeSlideHandler(title, content, id){
        let data = {
            title: title,
            content: content,
            slide_id: id,
            presentation_id: this.props.presentation.id
        };
        this.slideActions.updateSlide(data);
    }

    deleteSlideHandler(id){
        this.slideActions.deleteSlide(id, this.props.presentation.id);
        this.setState({currentSlideId: 'new'});
    }

    deletePresentationHandler(){
        this.presentationActions.deletePresentation(this.props.presentation.id);
        this.props.history.push('/presentations');
    }

    demonstratePresentationHandler() {
        this.props.history.push('/demonstration/' + this.props.presentation.id);
    }

    newSlideHandler(title, content){
        let data = {
            title: title,
            content: content,
            presentation_id: this.props.presentation.id
        };
        this.slideActions.createSlide(data);
    }

    handleChange(event) {
        this.setState({gmailToShare: event.target.value});
    }

    sharePresentation(){
        userActions.sharePresentation(
            this.props.presentation.id,
            this.state.gmailToShare).then(res => {console.log('res',res);});
        this.setState({gmailToShare: ''});
    }

    render() {

        let subject = this.props.presentation ? this.props.presentation.subject : '';

        let result;
        let currentSlideId = this.state.currentSlideId;
        if(currentSlideId === 'new') {
            result = <NewSlideView changeSlideHandler={this.newSlideHandler.bind(this)}/>;
        } else {
            let currentSlide = this.props.presentation.slides.filter(function(elem) {
                return elem.id == currentSlideId;
            })[0];
            result = <SlideView
                slide={currentSlide}
                changeSlideHandler={this.changeSlideHandler.bind(this)}
                deleteSlideHandler={this.deleteSlideHandler.bind(this)}
            />;
        }
        let shareButton = this.props.presentation.shared ? '' :
            <button
            className="btn btn-primary indentation"
            type="button"
            data-toggle="modal"
            data-target="#myModal">
            Share
            </button>;

        let deleteButton = this.props.presentation.shared ? '' :
            <button
                className="btn btn-danger indentation"
                type="button"
                onClick={this.deletePresentationHandler.bind(this)}>
                Delete presentation
            </button>;

        return (
            <div className="container">
                <h1>
                    {subject}
                    <button
                        className="btn btn-success indentation"
                        type="button"
                        onClick={this.demonstratePresentationHandler.bind(this)}>
                        Demonstrate
                    </button>
                    {shareButton}
                    {deleteButton}
                </h1>
                <div className="row">
                    <SlideList slides={this.props.presentation.slides} changeSlideId={this.changeCurrentSlideId.bind(this)}/>
                    {result}
                </div>

                <div className="modal fade bs-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog  modal-sm" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Enter user Gmail to share presentation</h4>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Gmail</label>
                                    <input
                                        type="text"
                                        className="gmail form-control"
                                        placeholder="Gmail"
                                        onChange={this.handleChange.bind(this)}
                                        value={this.state.gmailToShare}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.sharePresentation.bind(this)}>Share</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

SlidesContainer.propTypes = {
    dispatch: PropTypes.object.isRequired,
    presentation: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};


function mapStateToProps (state, ownProps) {
    let presentationId = ownProps.params.id;

    return {
        presentation: state.presentations.filter(function(elem) {
            return elem.id == presentationId;
        })[0]
    };
}

export default connect(mapStateToProps)(SlidesContainer);

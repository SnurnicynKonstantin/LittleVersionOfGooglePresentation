import React , { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as slideActions from '../actions/slideActions';
import * as presentationActions from '../actions/presentationActions';
import {bindActionCreators} from 'redux';
import SlideList from '../components/slide/SlideList';
import SlideView from '../components/slide/SlideView';
import NewSlideView from '../components/slide/NewSlideView';

class SlidesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {currentSlideId: 'new'};
        let { dispatch } = this.props;
        this.slideActions = bindActionCreators(slideActions, dispatch);
        this.presentationActions = bindActionCreators(presentationActions, dispatch);
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

        return (
            <div className="container">
                <h1>
                    {subject}
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={this.demonstratePresentationHandler.bind(this)}>
                        Demonstrate
                    </button>
                    <button
                        className="btn btn-danger"
                        type="button"
                        onClick={this.deletePresentationHandler.bind(this)}>
                        Delete presentation
                    </button>
                </h1>
                <div className="row">
                    <SlideList slides={this.props.presentation.slides} changeSlideId={this.changeCurrentSlideId.bind(this)}/>
                    {result}
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

import React from 'react';
import { connect } from 'react-redux';
import * as slideActions from '../actions/slideActions';
import {bindActionCreators} from 'redux';
import SlideList from '../components/slide/SlideList';
import SlideView from '../components/slide/SlideView';

class SlidesContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentSlideId: 1};
        let { dispatch } = this.props;
        this.actions = bindActionCreators(slideActions, dispatch);
    }

    componentWillMount() {
        this.actions.loadSlides(this.props.presentation.id);
    }

    changeCurrentSlideId(id) {
        this.setState({currentSlideId: id})
    }

    changeSlideHandler(title, content, id){
        let data = {
            title: title,
            content: content,
            slide_id: id,
            presentation_id: this.props.presentation.id
        };
        this.actions.updateSlide(data);
    }

    render() {

        let subject = this.props.presentation ? this.props.presentation.subject : '';

        let currentSlideId = this.state.currentSlideId
        let currentSlide = this.props.presentation.slides.filter(function(elem) {
            return elem.id == currentSlideId;
        })[0]

        return (
            <div className="container">
                <h1>{subject}</h1>
                <div className="row">
                    <SlideList slides={this.props.presentation.slides} changeSlideId={this.changeCurrentSlideId.bind(this)}/>
                    <SlideView slide={currentSlide} changeSlideHandler={this.changeSlideHandler.bind(this)}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    let presentationId = ownProps.params.id;

    return {
        presentation: state.presentations.filter(function(elem) {
            return elem.id == presentationId;
        })[0]
    };
}

//Запрос на получение слайдов
//Отдаем слайды в SlideList
//Рядом будет SlideView, по клику на слайд отодбражать его в SlideView

export default connect(mapStateToProps)(SlidesContainer);

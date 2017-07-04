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
    }

    componentWillMount() {
        let { dispatch } = this.props;
        let actions = bindActionCreators(slideActions, dispatch);
        actions.loadSlides(this.props.presentation.id);
    }

    changeCurrentSlideId(id) {
        this.setState({currentSlideId: id})
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
                    {/*<SlideList slides={this.props.presentation.slides}/>*/}
                    <SlideList slides={this.props.presentation.slides} changeSlideId={this.changeCurrentSlideId.bind(this)}/>
                    <SlideView slide={currentSlide}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state, ownProps) {
    let presentationId = ownProps.params.id;

    console.log("state in SlidesContainer", state.presentations.filter(function(elem) {
        return elem.id == presentationId;
    })[0]);

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

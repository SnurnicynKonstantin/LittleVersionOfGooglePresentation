import React , { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import DemonstratePresentation from '../components/presentation/DemonstratePresentationComponent';
import hotkey from 'react-hotkey';
hotkey.activate();

require("!style-loader!css-loader!sass-loader!../styles/scss/App.scss");

class DemonstratePresentationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {currentSlideId: 0};
        this.hotkeyHandler = this.handleHotkey.bind(this);
    }

    componentDidMount() {
        hotkey.addHandler(this.hotkeyHandler);
    }

    componentWillUnmount() {
        hotkey.removeHandler(this.hotkeyHandler);
    }

    handleHotkey(e) {
        let incrementedSlideId = this.state.currentSlideId;

        switch (e.key) {
            case 'ArrowRight':
                if(incrementedSlideId + 1 < this.props.slides.length) {
                    incrementedSlideId += 1;
                    this.setState({currentSlideId: incrementedSlideId});
                }
                break;

            case 'ArrowLeft':
                if(incrementedSlideId - 1 >= 0) {
                    incrementedSlideId -= 1;
                    this.setState({currentSlideId: incrementedSlideId});
                }
                break;
            default:
                this.props.history.push('/presentations');
        }

    }

    render() {
        return (
            <div>
                <DemonstratePresentation currentSlide={this.props.slides[this.state.currentSlideId]}/>
            </div>
        );
    }
}

DemonstratePresentationContainer.propTypes = {
    slides: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

function mapStateToProps (state, ownProps) {
    let presentationId = ownProps.params.id;
    return {
        slides: state.presentations.filter(function(elem) {
            return elem.id == presentationId;
        })[0].slides
    };
}

export default connect(mapStateToProps)(DemonstratePresentationContainer);
import React , { PropTypes, Component } from 'react';
import DemonstratePresentation from '../components/presentation/DemonstratePresentationComponent';
const io = require('socket.io-client');
const socket = io();

require("!style-loader!css-loader!sass-loader!../styles/scss/App.scss");

class DemonstrateSharePresentationContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {title: 'Title', content: 'Content'};
        socket.on('receive current slide', (data) => this.updateState(data));
    }

    componentDidMount() {
        socket.emit('room', {room: this.props.params.room});
    }

    updateState (data) {
        this.setState(data);
    }

    render() {
        return (
            <div>
                <DemonstratePresentation currentSlide={this.state}/>
            </div>
        );
    }
}


export default DemonstrateSharePresentationContainer;
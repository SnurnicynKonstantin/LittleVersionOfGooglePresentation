import React , { PropTypes, Component } from 'react';

class HeaderContainer extends Component {

    onGetBtnClick(e) {
        this.props.actions.loadPresentations();
    }

    render() {
        return (
            <div>
                <h1>Header</h1>
                <button className='btn' onClick={this.onGetBtnClick.bind(this)}>loadPresentations</button>
                {/*List my presentations*/}
            </div>
        );
    }
}

export default HeaderContainer;

import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                {/*Header here*/}
                {this.props.children}
            </div>
        );
    }
}

export default App;

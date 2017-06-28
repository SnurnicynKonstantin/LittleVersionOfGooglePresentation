import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import reducers from './reducers';
import { createStore } from 'redux';
import App from './containers/App';
import PresentationsContainer from './containers/PresentationsContainer';
import SlidesContainer from './containers/SlidesContainer';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

let store = createStore(reducers);

render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/" component={App}>
                {/*<IndexRoute component={PresentationsContainer} />*/}
                <Route path="presentations" component={PresentationsContainer} />
                <Route path="presentations/:subject" component={SlidesContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

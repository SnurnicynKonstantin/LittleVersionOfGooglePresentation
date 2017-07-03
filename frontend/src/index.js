import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory, Route } from 'react-router';
import {loadPresentations} from './actions/presentationActions';
import configureStore from './store/configureStore';
import App from './containers/App';
import PresentationsContainer from './containers/PresentationsContainer';
import SlidesContainer from './containers/SlidesContainer';
import NewPresentationComponent from './components/presentation/NewPresentationComponent';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
// store.dispatch(loadPresentations());

render(
    <Provider store={store}>
        <Router history={browserHistory} >
            <Route path="/" component={App}>
                {/*<IndexRoute component={PresentationsContainer} />*/}
                <Route path="presentations" component={PresentationsContainer} />
                <Route path="presentations/new" component={NewPresentationComponent} />
                <Route path="presentations/:id" component={SlidesContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

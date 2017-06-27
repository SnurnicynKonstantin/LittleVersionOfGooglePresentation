import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import PresentationsContainer from './containers/PresentationsContainer';
import SlidesContainer from './containers/SlidesContainer';

export default (
    <Route path="/" component={App}>
        {/*<IndexRoute component={PresentationsContainer} />*/}
        <Route path="presentations" component={PresentationsContainer} />
        <Route path="presentations/:subject" component={SlidesContainer} />
        {/*<Route path="course/:id" component={ManageCoursePage} />*/}
    </Route>
);

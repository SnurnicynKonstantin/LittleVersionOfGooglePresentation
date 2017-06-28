import {combineReducers} from 'redux';
import presentations from './presentationReducer';

const rootReducer = combineReducers({
    presentations
});

export default rootReducer;

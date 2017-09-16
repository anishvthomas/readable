import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './posts';
import categories from './categories';
import comments from './comments';


const reducer = combineReducers({categories,
posts,
comments,
form: formReducer})
export default reducer

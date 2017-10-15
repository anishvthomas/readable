import { RECEIVE_CATEGORIES } from '../actions/types.js'
const initialState ={
    categories:[],
}
export default function categories(state=initialState,action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES: return {
            ...state,
            categories:action.categories
            }
        default: return state
    }
}

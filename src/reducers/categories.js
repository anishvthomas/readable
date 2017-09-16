import { RECEIVE_CATEGORIES } from '../actions'
const initialState ={
    categories:[],
}
export default function categories(state=initialState,action) {
    console.log(" categories:reducer ****action:",action)
    //console.log("categories:reducer ****state:",state)
    switch (action.type) {
        case RECEIVE_CATEGORIES: return {
            ...state,
            categories:action.categories
            }
        default: return state
    }
}

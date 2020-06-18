import { ADD_ARTICLE } from "../constants";

const initialState = {
    articles : []
}

function reducer(state = initialState, action){
    if(action.type === ADD_ARTICLE){
        //Wrong, push is impure function, it modifies the original array
        //state.articles.push(action.payload);

        return Object.assign({},state, {
            articles: state.articles.concat(action.payload)
        })
    }
    return state
}

export default reducer;
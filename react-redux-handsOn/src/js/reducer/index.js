import { ADD_ARTICLE, DATA_LOADED } from "../constants";

const initialState = {
    articles : [],
    remoteArticles: []
}

function reducer(state = initialState, action){
    if(action.type === ADD_ARTICLE){
        //Wrong, push is impure function, it modifies the original array
        //state.articles.push(action.payload);

        return Object.assign({},state, {
            articles: state.articles.concat(action.payload)
        })
    }
    if(action.type === DATA_LOADED){
        return Object.assign({},state, {
            remoteArticles: state.articles.concat(action.payload)
        }) 
    }
    return state;
}

export default reducer;
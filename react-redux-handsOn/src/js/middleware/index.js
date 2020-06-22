import { ADD_ARTICLE } from "../constants";

// middleware function can take getState and dispatch as parameters
// Redux middleware is a function that returns another function (Next, Action)
// Here we use them to check the action payload before it reaches reducer
// It separates business logic from UI Library.

const forbiddenWords = ["spam","money"];

export function forbiddenWordsMiddleware({ dispatch }){
    return function(next){
        return function(action){
            if(action.type === ADD_ARTICLE){
                const foundWord = forbiddenWords.filter(word => 
                    action.payload.title.includes(word)
                );

                if(foundWord.length){
                    return dispatch({ type: "FOUND_BAD_WORDS" })
                }
            }
            return next(action);
        }
    }
}
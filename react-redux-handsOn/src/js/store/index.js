import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducer";
import { forbiddenWordsMiddleware } from "../middleware";

// Why compose? 
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

//connecting middleware to omit bad word in react store
// adding thunk middleware for async calls 
const store = createStore(
    reducer,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;
import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
// import DevTools from '../containers/DevTools'

// const configureStore = preloaderdState => {
//     const store = createStore(
//         rootReducer,
//         preloaderdState,
//         applyMiddleware(thunk, createLogger()),
//     )

//     if (module.hot) {
//         // Enable Webpack hot module replacement for reducers
//         module.hot.accept('../reducers', () => {
//             const nextRootReducer = require('../reducers').default
//             store.replaceReducer(nextRootReducer)
//         })
//     }

//     return store
// }


const configureStore = preloaderdState => {
    const store = createStore(rootReducer, preloaderdState);

    return store
}
export default configureStore
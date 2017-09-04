import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './store/configureStore'

const store = configureStore()
const history = createBrowserHistory()
import RouteMap from './routes/routeMap'

ReactDOM.render(
  <Provider store={store}>
    <RouteMap history={history}/>
  </Provider>,
  document.getElementById('root')
);
  
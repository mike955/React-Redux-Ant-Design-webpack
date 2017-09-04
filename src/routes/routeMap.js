import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'

// import Item1 from '../components/Item1'


class RouteMap extends React.Component{
    render(){
        return(
            <Router history={this.props.history}>
                <Route path='/' component = {App} />
            </Router>
        )
    }
}

export default RouteMap
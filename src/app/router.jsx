import React from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom';
import Loadable from 'react-loadable'
import PageLoader from './components/PageLoader';

export const LoadableHome = Loadable({
    loader: () => import('./pages/Home'),
    loading: PageLoader
})

class Router extends React.Component {

    render() {
        const {store} = this.props
        return (
            <Provider store={store}>
                <BrowserRouter basename="subset_trello">
                    <Route exact path="/" component={LoadableHome} />
                    <Route exact path="/todos/manage" component={LoadableHome} />
                </BrowserRouter>
            </Provider>
        )
    }
}

Router.propTypes = {
    store: PropTypes.object
}

export default Router

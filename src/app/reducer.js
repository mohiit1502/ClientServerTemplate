import {combineReducers} from 'redux'
import homeReducer from './pages/Home/reducer'

export default combineReducers({
    data: combineReducers({
        pages: combineReducers({
            home: homeReducer
        })
    })
})

import { createStore } from 'redux'
import * as actionCreators from '../actions'
import reducer from '../reducers'

const store = createStore(reducer,
    window.devToolsExtension && window.devToolsExtension({ actionCreators })
)

export default store
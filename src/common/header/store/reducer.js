import * as constants from './constants'
import { fromJS } from 'immutable'


const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage:1,
    person: {
        name: '',
        children: fromJS([])
    }
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.SEARCH_FOCUS :
            return state.set('focused', true)
            // return state.setIn(['person', 'children'], 
            //      'Alice'
            // );
        case constants.SEARCH_BLUR :
            return state.set('focused', false)
        case constants.MOUSE_ENTER :
            return state.set('mouseIn', true)
        case constants.MOUSE_LEAVE :
            return state.set('mouseIn', false)
        case constants.CHANGE_PAGE_LIST :
            return state.set('page', action.page)
        case constants.CHANGE_LIST :
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        default: 
            return state 
    }
}
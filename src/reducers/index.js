import * as R from 'ramda';

const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
        R.propOr(identity, action.type, handlers)(state, action)
    }
}

export default createReducer

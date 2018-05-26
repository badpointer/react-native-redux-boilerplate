import { TEST_ACTION } from "../actions/types";

const initialState = {
    exampleText: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TEST_ACTION:
            return {
                ...state,
                exampleText: action.payload
            }
        default:
            return state;
    }
}
import { TEST_ACTION } from "./types";

export const setExampleText = text => {
    return {
        type: TEST_ACTION,              // The event name the reducer(listener) will pick up and do something with the payload
        payload: text                   // the data that needs to be updated in the state
    }
}


// Using Redux Thunk to do Async calls in Redux because redux is syncranous 
export const setAsyncEampleText = text => {
    return (dispatch) => {
        // Async Call in here!!
        // Fetch.get(API)
    }
}
import {
    FETCH_QUOTE_START,
    FETCH_QUOTE_COMPLETE,
    FETCH_QUOTE_FAIL,
} from '../actions/actions';

const initialState = {
    QuoteList: "",
    isLoading: false,
    error: "",
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_QUOTE_START:
            //spread state & grab the piece that you need, grab key: [...spreading state.location]
            return{
                ...state, isLoading: true, QuoteList: "", error: ""
            }
        case FETCH_QUOTE_COMPLETE:
            console.log(action.payload)
            return{
                ...state, isLoading: false, QuoteList: action.payload, error: ""
            }
        case FETCH_QUOTE_FAIL: 
            return{
                ...state, isLoading: false, QuoteList: "", error: action.payload 
            }
            default: return state; 
    }
}
import axios from "axios"

//QUOTE ACTIONS
export const FETCH_QUOTE_START = "FETCH_QUOTE_START"
export const FETCH_QUOTE_COMPLETE = "FETCH_QUOTE_COMPLETE"
export const FETCH_QUOTE_FAIL = "FETCH_QUOTE_FAIL"

//EXPORT CONST functionName = (params) => (dispatch) => {}
export const fetchQuote = (quote) => (dispatch) => {
    dispatch({type: FETCH_QUOTE_START})

    axios
    .get('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?')
    .then(data => { console.log(data);
        dispatch({type: FETCH_QUOTE_COMPLETE, payload: data.data.file})
    })
    .catch(err=> {
        dispatch({type: FETCH_QUOTE_FAIL, payload: err.message})
    })
}

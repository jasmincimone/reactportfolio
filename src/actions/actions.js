import axios from "axios"

//QUOTE ACTIONS
export const FETCH_QUOTE_START = "FETCH_QUOTE_START"
export const FETCH_QUOTE_COMPLETE = "FETCH_QUOTE_COMPLETE"
export const FETCH_QUOTE_FAIL = "FETCH_QUOTE_FAIL"

//EXPORT CONST functionName = (params) => (dispatch) => {}
export const fetchQuote = () => async dispatch => {
    dispatch({type: FETCH_QUOTE_START})

    try{
        const data = await axios.get('https://api.fisenko.net/v1/quotes/en/random');
        dispatch({type: FETCH_QUOTE_COMPLETE, payload: data.data.message})
    } catch (err) {
        dispatch({type: FETCH_QUOTE_FAIL, payload: err.message})
    }
}

//     axios
//     .get('https://inspiration.goprogram.ai')
//     .then(data => { console.log(data);
//         dispatch({type: FETCH_QUOTE_COMPLETE, payload: data.data.message})
//     })
//     .catch(err=> {
//         dispatch({type: FETCH_QUOTE_FAIL, payload: err.message})
//     })
// }

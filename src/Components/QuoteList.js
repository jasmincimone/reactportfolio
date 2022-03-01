import { connect }  from 'react-redux'
import { fetchQuote } from '../actions/actions'
import Quote from './Quote';

const mapStateToProps = (state) => ({
    QuoteList: state.QuoteList,
    isLoading: state.isLoading,
    error: state.error,
})

function QuoteList(props){
    console.log(props);
    function handleClick(e){
        e.preventDefault()
        props.fetchQuote()
    }
    return(
        <>
        <div>
            <button onClick={handleClick}>Get Quote of the Day</button>
        </div>

        <div>
            {props.isLoading ? "Loading Quote" : ""}
            {props.error ? props.error : ""}
            {props.QuoteList ?
                <Quote quote = {props.QuoteList} key={props.QuoteList} />
                : "No Quotes Here =("}
        </div>
        </>
    )
}

export default connect(mapStateToProps, {fetchQuote}) (QuoteList)
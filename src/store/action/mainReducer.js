import * as actionTypes from "./actionType"
import axios from 'axios'
import { GET_DATA } from '../../endPoint'

export const getData = () => {
    return (dispatch)=> {
        axios.get(GET_DATA)
            .then((response) => {
                if(response.status === 200){
                    dispatch({
                        type : actionTypes.GET_NEWS_DATA,
                        payload : response.data.articles
                    })
                }
            })
            .catch((error) => console.log(error))
    }
}
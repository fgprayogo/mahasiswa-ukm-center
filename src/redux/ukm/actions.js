import {
    GET_UKM,
    GET_UKM_PROFILE,
} from "Constants/actionTypes";

import axios from 'axios';

export function getUkm (history){
 
    return async (dispatch) => {
       //default token
       const token = localStorage.getItem("token")
       const apiToken = {
         headers: {
           Authorization: `Bearer ${token}`
         }
       }
       const res = await axios.get('http://127.0.0.1:3333/api/ukm/ukms', apiToken)
       dispatch({
         type: GET_UKM,
         payload: res.data
         })
    }
}

export function getUkmProfile ({id}, history){
 
    return async (dispatch) => {
       //default token
       const token = localStorage.getItem("token")
       const apiToken = {
         headers: {
           Authorization: `Bearer ${token}`
         }
       }
       const res = await axios.get(`http://127.0.0.1:3333/api/ukm/ukm/${id}`, apiToken)
       dispatch({
         type: GET_UKM_PROFILE,
         payload: res.data.data
         })
    }
}


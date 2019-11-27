import {
    GET_PENDAFTARAN,
    POST_PENDAFTAR_UKM,
    CLEAR_FORM_PENDAFTARAN

} from "Constants/actionTypes";

import axios from 'axios';

export function getPendaftaran (history){
 
    return async (dispatch) => {
       //default token
       const token = localStorage.getItem("token")
       const apiToken = {
         headers: {
           Authorization: `Bearer ${token}`
         }
       }
       const res = await axios.get('http://127.0.0.1:3333/api/maha/pendaftaran', apiToken)
       dispatch({
         type: GET_PENDAFTARAN,
         payload: res.data
         })
         
    }
}

export function postPendaftaranUkm ({ukm_id}, history){
 
  return async (dispatch) => {
     //default token
     const token = localStorage.getItem("token")
     const apiToken = {
       headers: {
         Authorization: `Bearer ${token}`
       }
     }
     const res = await axios.post(`http://127.0.0.1:3333/api/pendaftaran`,{ukm_id}, apiToken)
     dispatch({
       type: POST_PENDAFTAR_UKM,
       payload: res.data
       })
      if(!res.data.msg){
        history.push("/app/applications/aktif")
      }
  }
}
export function clearFormPendaftaran (){
 
  return async (dispatch) => {
     dispatch({
       type: CLEAR_FORM_PENDAFTARAN
       })
  }     
}

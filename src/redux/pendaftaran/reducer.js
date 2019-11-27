import {
    GET_PENDAFTARAN,
    POST_PENDAFTAR_UKM,
    CLEAR_FORM_PENDAFTARAN
} from "Constants/actionTypes";


const INIT_STATE = {
    data:[],
    riwayat:[],
    aktif:[],
    ditolak:[],
    diterima:[],
    anggota:null,
    alumni:[],
    pen:'',
    contoh:[
      {
        label:'',
        
      }
    ]
  };


  export default (state = INIT_STATE, action) => {
    switch (action.type) {
      case GET_PENDAFTARAN:
        return { 
          ...state, 
          data: action.payload,
          riwayat: action.payload.riwayat,
          aktif: action.payload.aktif,
          diterima: action.payload.diterima,
          ditolak: action.payload.ditolak,
          anggota: action.payload.anggota,
          alumni: action.payload.alumni
        };
        case POST_PENDAFTAR_UKM:
            return { 
              ...state, 
              pen: action.payload
            };
        case CLEAR_FORM_PENDAFTARAN:
            return { 
              ...state, 
              pen:''
            };
      default:
        return { ...state };
    }
  };
  
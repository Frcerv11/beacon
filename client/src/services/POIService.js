import axios from 'axios';
import { landmarks }  from '../../data/landmarkCoord'
import CONFIG from '../config/config';

function setCoords(data){
    return axios.post(`${CONFIG.SERVER_URL}` + "/userPos",data)
     .then((response) => {
        console.log(response)
       return response
       
     })
     .catch(err => console.log(err))
}

function getPOI(){
    return landmarks
}

export default {  
    setCoords,
    getPOI
}


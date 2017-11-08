import axios from 'axios';
import CONFIG from '../config/config';

function setCoords(data){
    return axios.post(`${CONFIG.SERVER_URL}` + "/userPos",data)
     .then((response) => {
        console.log(response)
       return response
       
     })
     .catch(err => console.log(err))
}

export default {  
    setCoords
}
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-10d6b.cloudfunctions.net/api' // For deploy
    //'http://localhost:5001/clone-10d6b/us-central1/api'  // For debugging The API URL 
});

export default instance;
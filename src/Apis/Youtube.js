// Creating Basic configuration for axios

import axios from "axios";

const KEY = 'AIzaSyAp2i8_h_75ve3engM6CLFvMhLGad5PHLw';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        key : KEY,
        part : 'snippet',
        maxResults : 5
    }
});
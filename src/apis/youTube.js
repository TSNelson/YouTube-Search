import axios from 'axios';

const API_KEY = "AIzaSyDBuvnMVxiZbsm6LurxIdvy46i0rNbnzEA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
    part: "snippet",
    type: "video",
    maxResults: 5
  }
});
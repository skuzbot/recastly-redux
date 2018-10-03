import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  const SEND_QUERY = 'SEND_QUERY';
  let options = {
    key: YOUTUBE_API_KEY,
    query: q
  }
  return searchYouTube(options, callback);
};

export default handleVideoSearch;

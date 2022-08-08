import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideoSearch from '../hooks/useVideoSearch';

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, searchVideos] = useVideoSearch("Hello");

  useEffect(() => setSelectedVideo(videos[0]), [videos]);

  return (
    <div className='ui container' style={{marginTop: "1em"}} >
      <SearchBar onSearch={searchVideos} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} selectVideo={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
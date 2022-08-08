import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({videos, selectVideo}) => {
  return (
    <div className="video-list ui relaxed divided list">
      {videos.map(v => <VideoItem key={v.id.videoId} video={v} selectVideo={selectVideo} />)}
    </div>
  );
}

export default VideoList;
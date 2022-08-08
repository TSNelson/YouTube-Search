import { useState, useEffect } from 'react';

import youTube from '../apis/youTube';

const useVideoSearch = (defaultTerm) => {

  const [videos, setVideos] = useState([]);

  const searchVideos = async term => {
    const res = await youTube.get("/search", {params: {q: term}});
    setVideos(res.data.items);
  }

  useEffect(() => {
    const search = async () => searchVideos(defaultTerm);
    search();
  }, [defaultTerm]);

  return [videos, searchVideos];
}

export default useVideoSearch;
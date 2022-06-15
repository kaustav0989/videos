import React from "react";

const VideoDetail = ({video}) => {
   if(video) 
   return <div>{video.snippet.title}</div>
   else{
    return <div>loading..</div>
   }
}

export default VideoDetail;
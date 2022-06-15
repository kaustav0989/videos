import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const RenderedList = props.videos.map( video => {
        return (
        <VideoItem 
        key={video.snippet.description}
        onVideoSelect={props.onVideoSelect} 
        video={video} />
        );
    });
    return <div className="ui relaxed divided list">{RenderedList}</div>;
}

export default VideoList;
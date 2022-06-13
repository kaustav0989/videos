import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    const RenderedList = props.videos.map( video => {
        return <VideoItem video={video} />
    })
    return RenderedList;
}

export default VideoList;
import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../Apis/Youtube";
import VideoList from "./VideoList";

class App extends React.Component{

    state = { videos : [], SelectedVideo : null };

    onTermSubmit = async term => {
        const response = await Youtube.get('/search',{
            params :{
                q : term
            }
        });

        this.setState({ videos : response.data.items });
        console.log(response.data.items);
    }

    onVideoSelect = video => {
        console.log('the video is :',video);
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar 
                onFormSubmitCall = {this.onTermSubmit}/>
                <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
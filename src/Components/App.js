import React from "react";
import SearchBar from "./SearchBar";
import Youtube from "../Apis/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state = { videos : [], SelectedVideo : null };

    componentDidMount(){
        this.onTermSubmit('buildings');
    }

    onTermSubmit = async term => {
        const response = await Youtube.get('/search',{
            params :{
                q : term
            }
        });

        this.setState({ videos : response.data.items,
            SelectedVideo : response.data.items[0]
        });
        console.log(response.data.items);
    }

    onVideoSelect = video => {
        this.setState({ SelectedVideo : video });
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar 
                onFormSubmitCall = {this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.SelectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect = {this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
import React from "react";

export default class MovieVideos extends React.Component {

    render() {
        const { videos } = this.props;
        console.log(videos)
        return (
            <div className="container pl-0 pr-0">
                <div className="row">
                {videos.map((item, index) => (
                    <iframe key={index} className="col-4 border-0 mt-2" title="video" 
                    src={`https://www.youtube.com/embed/${item.key}`} />
                ))}
                </div>
            </div>
        )
    }
}
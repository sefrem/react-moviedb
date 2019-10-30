import React from "react";

export default class MovieVideos extends React.Component {

    render() {
        const { videos } = this.props;
        return (
                <div className="row">
                {videos.map((item, index) => (
                    <iframe key={index} className="col-4 border-0 mt-2" title="video" 
                    src={`https://www.youtube.com/embed/${item.key}`} allow="fullscreen" />
                ))}
                </div>
        )
    }
}
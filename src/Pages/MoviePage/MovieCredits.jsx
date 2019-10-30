import React from "react"

export default class MovieCredits extends React.Component {
    render() {
        const { credits } = this.props;
        return (
           
            <div className="row">
                {credits.map((item, index) => (
                    <div className="col-md-2 mt-2" key={index}>
                        <img className="card-img-top" 
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" />
                       <span ><b>{item.name}</b> / {item.character}</span>
                    </div>
                ))}
            </div>
            
        )
    }
}

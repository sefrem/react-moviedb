import React from "react"

export default class MovieCredits extends React.Component {
    render() {
        console.log(this.props.credits)
        const { credits } = this.props;
        return (
            <div className="container">
            <div className="row">
                {credits.map((item, index) => (
                    <div className="col-md-2 col-xl-3 mt-2" key={index}>
                        <img className="card-img-top" 
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" />
                       <span ><b>{item.name}</b> / {item.character}</span>
                    </div>
                ))}
            </div>
            </div>
        )
    }
}
// https://itchief.ru/bootstrap/grid-v4
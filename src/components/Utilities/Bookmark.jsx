import React from "react";
import CallApi from "../../api//api"
import AppContext from "../HOC/AppContextHOC";

class Bookmark extends React.Component {
    state = {
        bookmark: false
    }

    onToggleBookmark = () => {
      if(!this.props.session_id) {
        this.props.toggleModal()
      } else {
        this.setState(prevState => ({
            bookmark: !prevState.bookmark
        }));
        this.onBookmark()
      }
      };

      onBookmark = () => {
        const { session_id, item } = this.props;
          const  { bookmark } = this.state;
        CallApi.post('/account/{account_id}/favorite', {
          params: {
            session_id: session_id,
            media_type: "movie",
            media_id: item.id,
            favorite: `${!bookmark ? true : false}` 
          }
        }).then(data => {
          console.log(data.status_message);
        });
      };
      
    render() {
        const { bookmark } = this.state;
        return (
            <i
            className="material-icons"
            onClick={this.onToggleBookmark}
          >
            {bookmark ? "bookmark" : "bookmark_border"}
          </i>
        )
    }
}

export default AppContext(Bookmark);
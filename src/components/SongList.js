import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>

          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Basically it takes data from Redux Store and puts it as this.state.songs :)
const mapStateToProps = (state) => {
  //console.log(state);
  return { songs: state.songs };
};

// Connect function will call action creator, pass action and use store.dispatch for us
export default connect(mapStateToProps, { selectSong })(SongList);

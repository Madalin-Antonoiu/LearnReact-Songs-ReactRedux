import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    console.log(this.props);
    return <div>SongList</div>;
  }
}

// Basically it takes data from Redux Store and puts it as this.state.songs :)
const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

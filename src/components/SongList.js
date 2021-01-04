import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

export default connect()(SongList);
// connect() () - first time it returns a function, then calls the returned function - valid JS Code

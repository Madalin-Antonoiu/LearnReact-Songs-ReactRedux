import { combineReducers } from "redux";

const songsReducer = () => {
  //Return an action object with type and payload
  return [
    {
      title: "No Scrubs",
      duration: "4:05"
    },
    {
      title: "Macarena",
      duration: "2:30"
    },
    {
      title: "All Star",
      duration: "3:15"
    },
    {
      title: "Backstreet Boys",
      duration: "1:45"
    }
  ];
};
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

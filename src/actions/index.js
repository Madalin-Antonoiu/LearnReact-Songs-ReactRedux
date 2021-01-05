//Action creator ( with named export {}, instead of default)
export const selectSong = (song) => {
  //Return an action object with type and payload
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};

//Action creator ( with named export {}, instead of default)
export const firstAction = (song) => {
  //Return an action object with type and payload
  return {
    type: "SELECT_SONG",
    payload: song
  };
};

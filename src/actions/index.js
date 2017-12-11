export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};

//this action creator returns an action that will be sent to a reducer
//all action creators will appear as functions in state

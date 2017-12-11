export default (state = null, action) => {
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
    return state;
  }
};

//This reducer checks for a specific action.type and performs the appropriate function to return data

//state is the state from the last time this reducer was ran

// ES6 state = null
// if state is undefined, the value will be assigned to null

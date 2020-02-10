const initialState = {
  username,
  email,
  id,
}

// ACTION TYPES
const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

// ACTION EXPORTS
export const requestUserData = () => {
  // TODO: Create call to retreive users data and create payload object.
  return {
    type: REQUEST_USER_DATA,
    payload: {}
  }
}

// USER REDUCER
export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_USER_DATA:
      return state;
    default:
      return state;
  }
}
const initialState = {
  username,
  email,
  id,
}

// ACTION TYPES
const REQUEST_USER_DATA = 'REQUEST_USER_DATA';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';

// ACTION EXPORTS
export const requestUserData = () => {
  // TODO: Create call to retreive users data and create payload object.
  return {
    type: REQUEST_USER_DATA,
    payload: {}
  }
}

export const registerUser = (user) => {
  // TODO: Create call to register users data and return created profile as payload.
  return {
    type: REGISTER_USER,
    payload: {},
  }
}

export const loginUser = (user) => {
  // TODO: Create call to authenticate user and return user profile.
  return {
    type: LOGIN_USER,
    payload: {},
  }
}

// USER REDUCER
export const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_USER_DATA:
      return state;
    case REGISTER_USER:
      return state;
    case LOGIN_USER:
      return state;
    default:
      return state;
  }
}
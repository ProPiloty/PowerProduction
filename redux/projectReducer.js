const initialState = {
  projects: [],
}

// ACTION TYPES
const REQUEST_PROJECT_DATA = 'REQUEST_PROJECT_DATA';

// ACTION EXPORTS
export const requestProjectData = () => {
  // TODO: Create call to retreive project data and create payload object.
  return {
    type: REQUEST_PROJECT_DATA,
    payload: {}
  }
}

// USER REDUCER
export const projectReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_PROJECT_DATA:
      return state;
    default:
      return state;
  }
}
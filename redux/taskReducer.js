const initialState = {
  tasks: [],
}

// ACTION TYPES
const REQUEST_TASK_DATA = 'REQUEST_TASK_DATA';

// ACTION EXPORTS
export const requestTaskData = () => {
  // TODO: Create call to retreive task data and create payload object.
  return {
    type: REQUEST_TASK_DATA,
    payload: {}
  }
}

// USER REDUCER
export const taskReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_TASK_DATA:
      return state;
    default:
      return state;
  }
}
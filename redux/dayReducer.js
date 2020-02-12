const initialState = {
  days: [],
  day: {},
}

// ACTION TYPES
const REQUEST_DAY_DATA = 'REQUEST_DAY_DATA';

// ACTION EXPORTS
export const requestDayData = () => {
  // TODO: Create call to retreive day data and create payload object.
  return {
    type: REQUEST_DAY_DATA,
    payload: {}
  }
}

// DAY REDUCER
export const dayReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_DAY_DATA:
      return state;
    default:
      return state;
  }
}
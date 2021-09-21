const initialState = {
  countries: [],
};

const countryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'GET_COUNTRY') {
    return {
      ...state,
      countries: payload,
    };
  }

  return state;
};

export default countryReducer;

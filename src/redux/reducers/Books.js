const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'GET_BOOKS') {
    return {
      ...state,
      books: payload,
    };
  }

  return state;
};

export default booksReducer;

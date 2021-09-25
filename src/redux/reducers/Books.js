const initialState = {
  books: [],
  form: {
    title: '',
    author: '',
    isbn: '',
    publishedOn: '',
    numberOfPages: '',
    country: '',
  },
};

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'GET_BOOKS') {
    return {
      ...state,
      books: payload,
    };
  }
  if (type === 'SET_BOOKS') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.typeValue]: payload,
      },
    };
  }

  return state;
};

export default booksReducer;

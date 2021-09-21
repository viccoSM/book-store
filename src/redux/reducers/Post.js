const initialState = {
  post: {
    title: '',
    author: '',
    isbn: '',
    publishedOn: '',
    numberOfPages: '',
    country: '',
    imageUrl: 'https://picsum.photos/200/300',
  },
};

const postReducer = (state = initialState, action) => {
  const { type } = action;

  if (type === 'SET_POST') {
    return {
      ...state.post,
      [action.postType]: action.postValue,
    };
  }

  return state;
};

export default postReducer;

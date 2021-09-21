import Axios from 'axios';

export const getBooks = () => {
  return (dispatch) => {
    Axios.get('https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books')
      .then((res) => {
        const responseAPI = res.data;
        dispatch({ type: 'GET_BOOKS', payload: responseAPI });
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};

export const setPost = (postType, postValue) => {
  return { type: 'SET_POST', postType, postValue };
};

export const postApi = (form) => {
  const data = new FormData();
  data.append(form.title);
  data.append(form.author);
  data.append(form.isbn);
  data.append(form.publishedOn);
  data.append(form.numberOfPages);
  data.append(form.country);

  Axios.post('https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books', data)
    .then((res) => {
      console.log('success', res);
    })
    .catch((err) => {
      console.log('error', err);
    });
};

export const getCountry = () => {
  return (dispatch) => {
    Axios.get('https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/countries')
      .then((res) => {
        const responseAPI = res.data;
        dispatch({ type: 'GET_COUNTRY', payload: responseAPI });
      })
      .catch((err) => {
        console.log('error', err);
      });
  };
};

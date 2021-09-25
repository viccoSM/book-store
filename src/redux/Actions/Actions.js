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

export const setPost = (typeValue, payload) => {
  return { type: 'SET_BOOKS', typeValue, payload };
};

export const postApi = (form) => {
  // const data = new FormData();
  // data.append('title', form.title);
  // data.append('author', form.author);
  // data.append('isbn', form.isbn);
  // data.append('publishedOn', form.publishedOn);
  // data.append('numberOfPages', form.numberOfPages);
  // data.append('country', form.country);
  Axios.post('https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books', form)
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

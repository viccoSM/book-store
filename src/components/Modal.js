import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry } from '../redux/Actions';

export default function Modal(props) {
  const { className, onClick } = props;
  const [values, setValues] = useState({
    title: '',
    author: '',
    isbn: '',
    publishedOn: '',
    numberOfPages: '',
    country: '',
  });

  const { countries } = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues({
      ...values,
      [id]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    Axios.post(
      'https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books',
      values
    )
      .then((res) => {
        console.log('success', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);
  return (
    <div className={`modal ${className}`}>
      <form className="form-modal">
        <div className="modal-header">
          <h4>Add Book</h4>
          <span
            className="close"
            onClick={() => {
              onClick();
            }}>
            X
          </span>
        </div>
        <div className="modal-body">
          <div className="input-group">
            <label>Title</label>
            <input
              type="text"
              required
              id="title"
              value={values.title}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Author</label>
            <input
              type="text"
              required
              id="author"
              value={values.author}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>ISBN</label>
            <input
              type="text"
              required
              id="isbn"
              value={values.isbn}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Published On</label>
            <input
              type="date"
              required
              id="publishedOn"
              value={values.publishedOn}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Number of Page</label>
            <input
              type="number"
              required
              id="numberOfPages"
              value={values.numberOfPages}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Country Publicher</label>
            <select
              type="text"
              required
              id="country"
              value={values.country}
              onChange={handleChange}>
              {countries.map((obj, index) => {
                return (
                  <option key={index} value={obj.name}>
                    {obj.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="text-right">
            <button className="btn" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

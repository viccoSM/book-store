import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, postApi, setPost } from '../redux/Actions';

export default function Modal(props) {
  const { className, onClick } = props;

  const { countries } = useSelector((state) => state.countryReducer);
  const { form } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id);
    console.log(value);
    dispatch(setPost(id, value));
  };

  const onSubmit = (e) => {
    // console.log(form);
    e.preventDefault();
    postApi(form);
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
              value={form.title}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Author</label>
            <input
              type="text"
              required
              id="author"
              value={form.author}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>ISBN</label>
            <input
              type="text"
              required
              id="isbn"
              value={form.isbn}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Published On</label>
            <input
              type="date"
              required
              id="publishedOn"
              value={form.publishedOn}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Number of Page</label>
            <input
              type="number"
              required
              id="numberOfPages"
              value={form.numberOfPages}
              onChange={handleChange}
            />
          </div>
          <div className="input-group">
            <label>Country Publicher</label>
            <select
              type="text"
              required
              id="country"
              value={form.country}
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
            <button type="submit" className="btn" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

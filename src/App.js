import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './components/Card';
import Header from './components/Header';
import Modal from './components/Modal';
import { getBooks } from './redux/Actions';
import './style.css';

function App() {
  const [isModal, setIsModal] = useState(false);

  const { books } = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="head">
          <h4>Books ({books.length})</h4>
          <button className="btn" onClick={() => setIsModal(true)}>
            Add +
          </button>
        </div>
        <div className="content">
          {books.map((obj, index) => {
            return <Card key={index} data={obj} />;
          })}
          <Modal
            className={isModal ? '' : 'hide'}
            onClick={() => setIsModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from 'react-icons/fa'

function App() {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('draft');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      setArticles([...articles, { title, status, author }]);
      setTitle('');
      setStatus('draft');
      setAuthor('');
    }
  };

  const handleDelete = (index) => {
    const newArticles = articles.filter((_, i) => i !== index);
    setArticles(newArticles);
  };



  return (
    <>
      <div className="container mt-3">
        <h1>Gestione Articoli del Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titolo dell'articolo</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="status">Stato dell'articolo</label>
            <select
              className="form-control"
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="author">Autore dell'articolo</label>
            <input type="text" className="form-control" id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Aggiungi Articolo</button>
        </form> <ul className="list-group mt-3"> {articles.map((article, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div> <h5>{article.title}</h5> <p>Stato: {article.status}</p> <p>Autore: {article.author}</p> </div>
            <FaTrash onClick={() => handleDelete(index)} style={{ cursor: 'pointer' }} />
          </li>
        ))}
        </ul>
      </div>

    </>
  )
}

export default App

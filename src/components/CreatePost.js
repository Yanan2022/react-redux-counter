import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../js/actions/actions';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Le titre est requis.';
    if (!content.trim()) newErrors.content = 'Le contenu est requis.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newPost = {
      id: Date.now(),
      title,
      content
    };

    dispatch(addPost(newPost));

    // Réinitialisation
    setTitle('');
    setContent('');
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container mt-5 p-4 border rounded shadow-sm bg-light"
      style={{ maxWidth: "600px" }}
    >
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Entrez le titre"
        />
        {errors.title && <div className="invalid-feedback">{errors.title}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Contenu</label>
        <textarea
          id="content"
          name="content"
          className={`form-control ${errors.content ? 'is-invalid' : ''}`}
          rows="5"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Entrez le contenu"
        />
        {errors.content && <div className="invalid-feedback">{errors.content}</div>}
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </div>
    </form>
  );
};

export default CreatePost;

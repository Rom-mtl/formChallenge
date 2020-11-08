import Axios from 'axios';
import React, { useState } from 'react';

function FormStudent() {
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [comment, setComment] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  function onChangePoster(e) {
    setPoster(e.target.value);
  }

  function onChangeComment(e) {
    setComment(e.target.value);
  }

  const submitForm = (e) => {
    e.preventDefault();
    const postObjet = JSON.stringify({
      title: title,
      poster: poster,
      comment: comment,
    });

    console.log(postObjet);
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    Axios.post(url, postObjet)
      .then((res) => res.data.json())
      .then((res) => {
        alert(`Film ajouté avec l'ID ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du film : ${e.message}`);
      });
  };

  return (
    <div className='FormEmployee'>
      <h1>Saisie ton film préféré</h1>

      <form onSubmit={submitForm}>
        <fieldset>
          <legend>Informations</legend>
          <div className='form-data'>
            <label htmlFor='movieName'>Nom du film</label>
            <input
              type='text'
              id='movieName'
              name='movieName'
              value={title}
              onChange={onChangeTitle}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='movieUrl'>URL Poster Film</label>
            <input
              type='text'
              id='movieUrl'
              name='movieUrl'
              value={poster}
              onChange={onChangePoster}
            />
          </div>

          <div className='form-data'>
            <label htmlFor='comment'>Comment(Why did you enjoye it ? </label>
            <input
              type='textarea'
              id='comment'
              name='comment'
              value={comment}
              onChange={onChangeComment}
            />
          </div>
          <hr />
          <div className='form-data'>
            <input type='submit' value='Send' />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default FormStudent;

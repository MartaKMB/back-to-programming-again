import { useState } from 'react';
import './App.css';

function AppForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userAccept, setUserAccept] = useState(false);

  const handleChange = (e) => {
    console.log('handleChange', e.target.type, e.target.value);
    const targetName = e.target.name;
    switch (targetName) {
      case 'userName':
        setUserName(e.target.value);
        break;
      case 'userEmail':
        setUserEmail(e.target.value);
        break;
      case 'userPassword':
        setUserPassword(e.target.value);
        break;
      case 'userAccept':
        setUserAccept(e.target.checked);
        break;
      default:
        console.log('coś poszło nie tak');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Zatrwierdź: ', e);
  };

  return (
    <div className='App'>
      <header>
        <strong>Tutorial: Formularz z walidacją</strong>
      </header>
      <div style={{ display: 'none' }}>
        Tutorial zrobiony do: 86 lekcja, 17 minuta
      </div>
      <div>Źródło: https://www.udemy.com/course/kurs-react-od-podstaw/</div>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor='user'>
          Twoje imię:
          <input
            type='text'
            id='user'
            name='userName'
            value={userName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='email'>
          Twoje adres email:
          <input
            type='email'
            id='email'
            name='userEmail'
            value={userEmail}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password'>
          Twoje adres email:
          <input
            type='password'
            id='password'
            name='userPassword'
            value={userPassword}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='accept'>
          <input
            type='checkbox'
            name='userAccept'
            checked={userAccept}
            onChange={handleChange}
          />
          Wyrazam zgodę na wszystko!
        </label>
        <button>ZAPISZ SIĘ</button>
      </form>
    </div>
  );
}

export default AppForm;

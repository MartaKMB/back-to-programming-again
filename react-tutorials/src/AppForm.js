import { useEffect, useState } from 'react';
import './App.css';

function AppForm() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userAccept, setUserAccept] = useState(false);

  const [userNameError, setUserNameError] = useState(false);
  const [userEmailError, setUserEmailError] = useState(false);
  const [userPasswordError, setUserPasswordError] = useState(false);
  const [userAcceptError, setUserAcceptError] = useState(false);

  const [formMessage, setFormMessage] = useState('');

  const messages = {
    userNameIncorect:
      'Błędna nazwa uzytkownika - powinna mieć min. 10 znaków i nie zawierać spacji',
    userEmailIncorect: 'Błędny email - brak @ w adresie',
    userPasswordIncorect: 'Błędne hasło - powinno mieć dokładnie 8 znaków',
    userAcceptIncorect: 'Brak potwierdzenia zgody - jest wymagana',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      formMessage !== '' && setFormMessage('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [formMessage]);

  const handleChange = (e) => {
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

    const validation = formValidation();

    if (validation.correct) {
      setUserName('');
      setUserEmail('');
      setUserPassword('');
      setUserAccept(false);
      setUserNameError(false);
      setUserEmailError(false);
      setUserPasswordError(false);
      setUserAcceptError(false);
      setFormMessage('Formularz został wysłany!');
    } else {
      setUserNameError(!validation.userNameValidation);
      setUserEmailError(!validation.userEmailValidation);
      setUserPasswordError(!validation.userPasswordValidation);
      setUserAcceptError(!validation.userAcceptValidation);
    }
  };

  const formValidation = () => {
    let userNameValidation = false;
    let userEmailValidation = false;
    let userPasswordValidation = false;
    let userAcceptValidation = false;
    let correct = false;

    if (userName.length > 10 && userName.indexOf(' ') === -1) {
      userNameValidation = true;
    }

    if (userEmail.indexOf('@') !== -1) {
      userEmailValidation = true;
    }

    if (userPassword.length === 8) {
      userPasswordValidation = true;
    }

    if (userAccept) {
      userAcceptValidation = true;
    }

    if (
      userAcceptValidation &&
      userEmailValidation &&
      userPasswordValidation &&
      userAcceptValidation
    ) {
      correct = true;
    }

    return {
      userNameValidation,
      userEmailValidation,
      userPasswordValidation,
      userAcceptValidation,
      correct,
    };
  };

  return (
    <div className='App'>
      <header>
        <strong>Tutorial: Formularz z walidacją</strong>
      </header>
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
          {userNameError && <span>{messages.userNameIncorect}</span>}
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
          {userEmailError && <span>{messages.userEmailIncorect}</span>}
        </label>
        <label htmlFor='password'>
          Twoje hasło:
          <input
            type='password'
            id='password'
            name='userPassword'
            value={userPassword}
            onChange={handleChange}
          />
          {userPasswordError && <span>{messages.userPasswordIncorect}</span>}
        </label>
        <label htmlFor='accept'>
          <input
            type='checkbox'
            name='userAccept'
            checked={userAccept}
            onChange={handleChange}
          />
          Wyrazam zgodę na wszystko!
          {userAcceptError && <span>{messages.userAcceptIncorect}</span>}
        </label>
        <button>ZAPISZ SIĘ</button>
      </form>
      {formMessage && <h3>{formMessage}</h3>}
    </div>
  );
}

export default AppForm;

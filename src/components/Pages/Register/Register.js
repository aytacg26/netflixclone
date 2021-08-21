import { useState } from 'react';
import './Register.scss';
import logo from '../../../assets/images/NetFlixFullTextLogo.png';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showNextInput, setShowNextInput] = useState(false);

  const entryHandler = (e) => {
    const { value } = e.target;

    if (!showNextInput) {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const validateEmail = (emailAddress) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return regex.test(emailAddress);
  };

  const registryHandler = (e) => {
    e.preventDefault();

    if (!showNextInput) {
      validateEmail(email)
        ? setShowNextInput(true)
        : console.log('Please enter a valid email address...');
    } else {
      //Validate password according to rules if any and then submit form data.
      //After validation
      const registryData = {
        email,
        password,
        date: new Date(),
      };

      console.log(registryData);

      setEmail('');
      setPassword('');
      setShowNextInput(false);
    }
  };

  const formBtnText = !showNextInput ? 'Get Started' : 'Start Membership';
  const formInput = !showNextInput ? (
    <input
      type='text'
      placeholder='Email address'
      value={email}
      onChange={entryHandler}
    />
  ) : (
    <input
      type='password'
      placeholder='Password'
      value={password}
      onChange={entryHandler}
    />
  );

  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img src={logo} alt='Netflix Clone Logo' className='logo' />
          <button className='loginButton'>Sign In</button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies, TV Shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form className='input' onSubmit={registryHandler}>
          {formInput}
          <button className='registerButton' type='submit'>
            {formBtnText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

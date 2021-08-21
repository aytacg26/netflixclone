import './Login.scss';
import logo from '../../../assets/images/NetFlixFullTextLogo.png';

const Login = () => {
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img src={logo} alt='Netflix Clone Logo' className='logo' />
        </div>
      </div>
      <div className='container'>
        <form>
          <h1>Sign In</h1>
          <input type='text' placeholder='Email or phone number' />
          <input type='password' placeholder='Password' />
          <button type='submit' className='loginButton'>
            Sign In
          </button>
          <span>
            New to Netflix? <b>Sign up now</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;

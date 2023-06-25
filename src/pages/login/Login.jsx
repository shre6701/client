
import "./login.scss";

const Login = () => {

 
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form >
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone No."/>
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>New to Netflix? <b> Sign up now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <b>Learn more.</b>
          </small>
        </form>
      </div>
      
    </div>
  );
};

export default Login;

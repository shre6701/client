import { useState, useRef } from "react";
import "./register.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("")
  const navigate= useNavigate()



  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async(e) => {
    e.preventDefault()
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("http://localhost:8800/api/auth/register", {email,username, password});
      navigate("http://localhost:8800/api/auth/login");
    } catch (error) {
      
    }
    
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />

          <button className="logInButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere, Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ): (
            <form className="input">
            <input type="text" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>

        ) }
      </div>
    </div>
  );
};

export default Register;

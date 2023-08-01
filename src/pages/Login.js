import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import clouds from "../assets/thunder-strom.png";
import { useUserAuth } from "../context/UseAuthContex";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password).then(() => {
        navigate("/");
      });
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    try {
      await googleSignIn().then(() => {
        navigate("/");
      });
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="form flex row">
        <img src={clouds} alt="login-bg" />
        <div className="flex column">
          <h2 className="form-title"> Login</h2>
          <p className="form-para">
            Don't let the weather catch you off guard. Save your favorite cities
            and always know their weather.
          </p>
          {error && <p className="alert">{error}</p>}
          <form onSubmit={(e) => handleSubmit(e)} className="auth-form">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="Submit">Log In</button>
          </form>
          <p className="or-para">or</p>
          <hr className="hr" />
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />

          <p className="from-link">
            Don't have an account?{" "}
            <Link to="/Signup" className="from-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

import { Link, useNavigate } from "react-router-dom";
import clouds from "../assets/storm.png";
import { useState } from "react";
import { useUserAuth } from "../context/UseAuthContex";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const { signUp } = useUserAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await signUp(email, password).then(() => {
        navigate("/Login");
      });
    } catch (err) {
      setAlert(err.message);
    }
    setLoading(false)
  };
  
  return (
    <>
      <div className="form flex row">
        <div className="flex column">
          <h2 className="form-title"> Sign up</h2>
          <p className="form-para">
            Don't let the weather catch you off guard. Save your favorite cities
            and always know their weather.
          </p>

          {alert && <p className="alert">{alert}</p>}
          <form onSubmit={(e) => handleSubmit(e)} className="auth-form">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={loading} type="Submit">
              Sign up
            </button>
          </form>
          <p className="from-link">
            Don't have an account? <Link to="/Login">Login</Link>
          </p>
        </div>
        <img src={clouds} alt="login-bg" />
      </div>
    </>
  );
};

export default Signup;

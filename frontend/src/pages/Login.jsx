import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCredentialsTrue, setIsCredentialsTrue] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://165.227.137.113:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          document.cookie = `jwtToken=${data.access_token}`;
          window.location.replace("https://gingerx.netlify.app/");
        } else {
          setIsCredentialsTrue(false);
          setTimeout(() => {
            setIsCredentialsTrue(true);
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="login-page">
      <div className="login-page__form">
        <h1>Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="errorMessage">
            {!isCredentialsTrue && "Email or password is incorrect"}
          </p>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

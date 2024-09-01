import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiRequest from "../../lib/apiRequest"; // Update this path as needed
import { AuthContext } from "../../context/AuthContext"; // Update this path as needed

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        name,
        password,
      });

      updateUser(res.data);

      navigate("/");
    } catch (err) {
      setError(err.response ? err.response.data.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </div>
        <div>
        <Link to="/form">{"Don't"} have an account?</Link>

        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;

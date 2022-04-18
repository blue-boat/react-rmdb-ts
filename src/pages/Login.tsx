import React, { useContext, useState } from "react";
import API from "../API";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import Button from "../components/Button";
import { Wrapper } from "../Login.styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { setUser } = useContext(Context);

  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    if (name === "username") {
      setUsername(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async () => {
    setError(false);
    try {
      const requestToken = await API.getRequestToken();
      const session = await API.authenticate(requestToken, username, password);
      if (!session) {
        throw new Error("Failed to authenticate request token");
      }
      setUser({ username, session });
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Wrapper>
      {error && <div className="error">Something went wrong!</div>}
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => handleInput(e)}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => handleInput(e)}
      />
      <Button label="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;

import React, { useState } from "react";

export default function SignUpForm() {
  const [username, setusernames] = useState("");
  const [password, setusernpassword] = useState("");
  const [error, setusererror] = useState("");
  const [token, setToken] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup"
      );
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setusererror(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up!</h2>

      <form>
        <label>
          Username: <input />
        </label>
        <label>
          Password: <input />
        </label>
        <button>Submit</button>
      </form>

      <input value={username} onChange={(e) => setusernames(e.target.value)} />

      <form onSubmit={handleSubmit}></form>
    </>
  );
}

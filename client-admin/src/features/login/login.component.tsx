import React, { ChangeEvent, FormEvent, Fragment, useState } from 'react';
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(credentials);
  };
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [target.name]: target.value,
    });
  };

  const { email, password } = credentials;
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        {/* Email */}
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={onChange}
        />
        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </form>
    </Fragment>
  );
};

export default Login;

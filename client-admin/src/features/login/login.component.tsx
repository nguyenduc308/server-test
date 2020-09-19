import React, { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authAction } from 'store/auth/auth-actions';
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: 'duc@gmail.com',
    password: '123213',
  });
  const dispatch = useDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authAction.login(credentials));
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

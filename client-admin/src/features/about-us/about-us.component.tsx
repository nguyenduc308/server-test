import React from 'react';
import { LOGIN_FULL_PATH } from 'shared/constants/paths.const';
import { useAuth } from 'shared/guards/useAuth';

export const AboutUs = () => {
  useAuth(LOGIN_FULL_PATH);
  return <span>About us</span>;
};

import React from 'react';
import { LOGIN_FULL_PATH } from 'shared/constants/paths.const';
import { useAuth } from 'shared/guards/useAuth';
export const CategoryComponent = () => {
  useAuth(LOGIN_FULL_PATH);
  return <div>Routing here</div>;
};

import React from 'react';
import { GridStyled } from './grid.styled';

export const Grid: React.FC = ({ children }) => {
  return <GridStyled>{children}</GridStyled>;
};

import React from 'react';
import { LoadingSpinnerStyled, LoadingOverLayStyled } from './loading.styled';

const LoadingComponent = () => {
  return (
    <LoadingOverLayStyled>
      <LoadingSpinnerStyled>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingSpinnerStyled>
    </LoadingOverLayStyled>
  );
};

export default LoadingComponent;

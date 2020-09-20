import styled from 'styled-components';

export const HeaderStyled = styled.header`
  box-shadow: 1px 1px 1px #ccc;
`;

export const HeaderInnerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    margin: 0;
  }
`;
export const LogoutItemStyled = styled.div`
  cursor: pointer;
  user-select: none;
`;

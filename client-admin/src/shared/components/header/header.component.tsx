import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';

import {
  HeaderInnerStyled,
  HeaderStyled,
  LogoutItemStyled,
} from './header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from 'store/auth/auth-actions';
import { localStorageService } from 'shared/service';
import { TOKEN } from 'shared/constants/keys.const';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const onLogout = () => {
    localStorageService.removeItem(TOKEN);
    dispatch(authAction.logout());
  };
  return (
    <HeaderStyled>
      <HeaderInnerStyled>
        <div>
          <h1>YogaLamHuong</h1>
        </div>
        {isAuth && (
          <LogoutItemStyled onClick={onLogout}>
            <LogoutOutlined /> Logout
          </LogoutItemStyled>
        )}
      </HeaderInnerStyled>
    </HeaderStyled>
  );
};

export default HeaderComponent;

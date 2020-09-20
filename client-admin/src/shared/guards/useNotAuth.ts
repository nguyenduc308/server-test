import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const useNotAuth = (path: string) => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const history = useHistory();
  useEffect(() => {
    if (isAuth) {
      history.push(path);
    }
  }, [isAuth, history]);
};

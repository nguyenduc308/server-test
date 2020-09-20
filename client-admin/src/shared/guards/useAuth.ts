import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const useAuth = (path: string) => {
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const history = useHistory();
  useEffect(() => {
    if (!isAuth) {
      history.push(path);
    }
  }, [history, isAuth, path]);
};

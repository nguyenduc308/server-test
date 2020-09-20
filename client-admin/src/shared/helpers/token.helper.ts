import jwt_decode from 'jwt-decode';

export const checkTokenExprired = (token: string | undefined | null): any[] => {
  if (!token) {
    console.log('TOKEN IS EXPIRED OR NULL');
    return [false, null];
  }
  console.log('Check expired token');
  const decoded = jwt_decode(token) as any;
  return [decoded.exp < new Date().getTime() / 1000, decoded];
};

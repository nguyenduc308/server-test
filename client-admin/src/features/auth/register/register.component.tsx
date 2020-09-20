import React from 'react';
import { Link } from 'react-router-dom';

import { LOGIN_PATH } from 'shared/constants/paths.const';

const RegisterComponent = () => {
  return (
    <div>
      Chức năng này hiện tại đang khóa
      <Link to={LOGIN_PATH}> Đăng nhập</Link>
    </div>
  );
};

export default RegisterComponent;

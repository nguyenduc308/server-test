import React, { Fragment } from 'react';
import { Headercomponent } from 'shared/components';

const LayOutNoColComponent: React.FC<() => JSX.Element> = ({
  children,
}): JSX.Element => {
  return (
    <Fragment>
      <Headercomponent />
      LayoutWithSidebarComponent
      {children}
    </Fragment>
  );
};
export default LayOutNoColComponent;

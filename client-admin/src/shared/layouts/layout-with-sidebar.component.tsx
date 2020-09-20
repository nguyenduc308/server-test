import React from 'react';

const LayoutWithSidebarComponent: React.FC<() => JSX.Element> = ({
  children,
}): JSX.Element => {
  return (
    <div>
      LayoutWithSidebarComponent
      {children}
    </div>
  );
};

export default LayoutWithSidebarComponent;

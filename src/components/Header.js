import React from 'react';

const Header = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}

Header.defaultProps = {
  subTitle: 'Create random option and view selected '
};

export default Header;
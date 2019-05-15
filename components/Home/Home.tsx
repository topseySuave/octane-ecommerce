// import Link from 'next/link';
import React, { useState } from 'react';
import HeaderMenu from 'components/HeaderMenu';
import { Visibility, Responsive } from 'semantic-ui-react';
// import styles from './index.scss';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
}

export default () => {
  const [fixedMenu, setFixedMenu] = useState(false);

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={() => setFixedMenu(true)}
        onBottomPassedReverse={() => setFixedMenu(false)}
      >
        <HeaderMenu fixed={fixedMenu} />
      </Visibility>
    </Responsive>
  );
}

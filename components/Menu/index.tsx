import React from 'react';
import { FiMenu } from 'react-icons/fi'

import { Container, Navigation } from './styles';

declare global {
  interface window {
    toggleActiveMenu: (() => void) | undefined;
  }
}

const MenuForm: React.FC = () => {
  function handleToggle() {
    // if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>
      <Navigation>
        <h1>
          <FiMenu size={24} color="#fff" />
          {/* <span>Blog ChaComigo</span> */}
        </h1>
        {/* ✕ chacter in video description */}
        <button className="action--close" onClick={handleToggle}>
          ✕
        </button>
      </Navigation>

    </Container>
  );
};

export default MenuForm;
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PageTransition = ({ children, location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      classNames="page"
      timeout={300}
    >
      <div>
        {children}
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default PageTransition;
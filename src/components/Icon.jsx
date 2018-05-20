import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import classnames from 'classnames';

import '../styles/Icon.css';

const Icon = ({name, tip, location, className, onClick, isSmall, disabled}) => {
  const tooltip = (<Tooltip id={`${name}tooltip`}>{tip}</Tooltip>);
  const iconClass = classnames({
    'icon--disabled': disabled,
    'icon': !isSmall,
    'icon--small': isSmall
  })
  return (
    <div className={className}>
      <OverlayTrigger placement={location || 'top'} overlay={tooltip} delayShow={500}>
        <img className={iconClass} src={`icons/${name}.png`} alt={name} onClick={onClick}/>
      </OverlayTrigger>
    </div>
  );
}

export default Icon;

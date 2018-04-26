import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import '../styles/Icon.css';

const Icon = ({name, tip, location, className, onClick, isSmall}) => {
  const tooltip = (<Tooltip id={`${name}tooltip`}>{tip}</Tooltip>);

  return (
    <div className={className}>
      <OverlayTrigger placement={location || 'top'} overlay={tooltip} delayShow={500}>
        <img className={isSmall ? 'icon--small' : 'icon'} src={`icons/${name}.png`} alt={name} onClick={onClick}/>
      </OverlayTrigger>
    </div>
  );
}

export default Icon;

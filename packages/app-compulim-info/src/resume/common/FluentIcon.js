import React from 'react';

const FluentIcon = ({ icon }) => !!icon && <i className={`ms-Icon ms-Icon--${icon}`} aria-hidden="true" />;

export default FluentIcon;

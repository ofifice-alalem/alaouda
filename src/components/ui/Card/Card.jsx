import React from 'react';
import './Card.css';

/**
 * Reusable Card Component
 * Implements Composition pattern for flexible content
 */
const Card = ({ 
  children, 
  title, 
  className = '', 
  shadow = true,
  ...props 
}) => {
  const cardClass = [
    'card',
    shadow ? 'card--shadow' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClass} {...props}>
      {title && <div className="card__header">{title}</div>}
      <div className="card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;
import React from 'react';
import './Button.css';
import { FaEnvelope, FaPlus } from 'react-icons/fa'; 


const buttonData = [
  { type: 'primary', label: 'Continue' },
  { type: 'primary', label: 'Continue', variant: 'outline' },
  { type: 'secondary', label: 'Cancel' },
  { type: 'secondary', label: 'Cancel', variant: 'outline' },
  { type: 'link', label: 'Link' },
  { type: 'link', label: 'Link' },
  { type: 'primary', label: 'Login with Email', icon: <FaEnvelope /> },
  { type: 'secondary', icon: <FaPlus /> },
  { type: 'secondary', icon: <FaPlus /> },
  { type: 'primary', label: 'Login with Email', isLoading: true },
];

const Button = ({ type, variant, label, onClick, icon, isLoading }) => {
  return (
    <button
      className={`btn btn-${type} btn-${variant}`} 
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="loading-spinner">Loading</span>
      ) : (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
};

const ButtonGroup = () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
        {buttonData.map((button, index) => (
          <Button
            key={index}
            type={button.type}
            label={button.label}
            variant={button.variant}
            icon={button.icon}
            isLoading={button.isLoading}
          />
        ))}
      </div>
    );
  };
  

export { Button, ButtonGroup };

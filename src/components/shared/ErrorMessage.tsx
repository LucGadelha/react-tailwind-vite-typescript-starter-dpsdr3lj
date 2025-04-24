import React from 'react';

interface ErrorMessageProps {
  message: string;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => {
  return (
    <p className={`text-red-500 text-sm ${className}`}>
      {message}
    </p>
  );
};

export default ErrorMessage;

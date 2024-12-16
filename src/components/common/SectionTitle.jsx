import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-4">
      {children}
    </h2>
  );
};

export default SectionTitle;
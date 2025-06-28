import * as React from 'react';
import { AddressContext } from './contextInterface';

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = React.useState('');

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  const context = React.useContext(AddressContext);
  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};
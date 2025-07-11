import * as React from 'react';
import { AddressContext } from './contextInterface';
import { DateContext } from './contextInterface';

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = React.useState('');
  const [lat, setLat] = React.useState(0);
  const [long, setLong] = React.useState(0);

  return (
    //    setLat: (lat:string) => void;
    //    setLong: (long:string) => void;
    <AddressContext.Provider value={{  address, setAddress, lat, setLat, long, setLong } }>
      {children}
    </AddressContext.Provider>
  );
};


export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [dateStart, setDateStart] = React.useState<Date | null>(null);
  const [dateEnd, setDateEnd] = React.useState<Date | null>(null);

  return (
    <DateContext.Provider value={{ dateStart, dateEnd, setDateStart, setDateEnd }}>
      {children}
    </DateContext.Provider>
  );
};


export const useDate = () => {
  const context = React.useContext(DateContext);
  if (!context) {
    throw new Error('useDate must be used within a DateProvider');
  }
  return context;
};

export const useAddress = () => {
  const context = React.useContext(AddressContext);
  if (!context) {
    throw new Error('useAddress must be used within an AddressProvider');
  }
  return context;
};


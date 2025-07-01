import { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    userID:string//pk
    name:string
    storedSearches: JSON [];//for json changing this to a DB i would like ot try no sql like mongoose for this but that will come later fr now this will do i think(stores addresses)
    accesstoken: string
    refreshToken: string;
}

export interface userSearch{
    userID:string
    address:string;
}

export interface AddressContextType{
	address: string;
	setAddress: (address:string)=>void;
}

export const AddressContext = createContext<AddressContextType | undefined>(undefined);
import { createContext,} from 'react';

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
    long: number;
    lat: number;
    setLat: (lat:number) => void;
    setLong: (long:number) => void;
	setAddress: (address:string)=>void;
}

export interface DateType {  
    dateStart: Date | null; 
    dateEnd: Date | null;
    setDateStart: (dateStart: Date | null) => void;
    setDateEnd: (dateEnd: Date | null) => void;
}


export const AddressContext = createContext<AddressContextType | undefined>(undefined);
export const DateContext = createContext<DateType | undefined>(undefined);

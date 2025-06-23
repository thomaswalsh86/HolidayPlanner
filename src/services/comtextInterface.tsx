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

export interface search{//for testing I think
    selectAddress:string
}

export interface userContextType{
    user:User|null;
    setUser:(User: {
    userID:string
    name:string
    storedSearches: JSON [];
    accesstoken: string
    refreshToken: string;}) => void;
}

const UserContext = createContext<userContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = useState<User | null>(null);

	const updateUser = (user: User) => {
		setUser(user);
		sessionStorage.setItem('user', JSON.stringify(user));
	};

	useEffect(() => {
		const storedUser = sessionStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser: updateUser }}>
			{children}
		</UserContext.Provider>
	);
};

export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};
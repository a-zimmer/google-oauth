import React from "react";
import Login from '../Login/Login';

import UserContextProvider from '../../contexts/UserContext';

export default function App() {
	return (
		<UserContextProvider>
			<Login></Login>
		</UserContextProvider>
	);
};
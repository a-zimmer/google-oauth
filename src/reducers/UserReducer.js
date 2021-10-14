export const initialState = {
	isLoggedIn: false,
    userName: null,
    email: null,
    expires_in: null,
    profilePic: null
};

export const UserReducer = (state, action) => {
	switch (action.type) {
		case 'setLoggedIn':
			return {
                ...state, 
                isLoggedIn: true,
                userName: action.payload.userName,
                email: action.payload.email,
                expires_in: action.payload.expires_in,
                profilePic: action.payload.profilePic
            };
        case 'setLoggedOut':
            return {
                ...state, 
                isLoggedIn: false,
                userName: null,
                email: null,
                expires_in: null,
                profilePic: null
            };
		default:
			return state;
	}
};
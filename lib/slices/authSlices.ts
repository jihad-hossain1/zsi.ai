import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginInterface {
    email: string;
    token: string;
    user: {
        name: string;
        email: string;
        category: string | null;
        email_verified: boolean;
    }
}

const initialState: LoginInterface = {
    email: "",
    token: "",
    user: {
        name: "",
        email: "",
        category: null,
        email_verified: false
    }
};



const authSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loggedUser: (
            state,
            action: PayloadAction<{ email: string; token: string; user: { name: string; email: string; category: string | null; email_verified: boolean } }>,
        ) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem("auth", JSON.stringify(state));
        },

        logoutUser: (state) => {
            state.email = "";
            state.token = "";
            state.user = {
                name: "",
                email: "",
                category: null,
                email_verified: false
            }
            localStorage.removeItem("auth");
        } 
    },
});

export const { loggedUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

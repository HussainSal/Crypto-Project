import { configureStore, createSlice } from "@reduxjs/toolkit";

const isAuth = { login: false, logout: false, signup: false, signoff: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: isAuth,
  reducers: {
    login(state) {
      state.login = true;
    },

    logout(state) {
      state.login = false;
    },

    signup(state) {
      state.signup = true;
    },
    signoff(state) {
      state.signup = false;
    },
  },
});

const apiDataInitialState = {response: [] }
const apiSlice = createSlice({
  name:"apiSlice",
  initialState:apiDataInitialState,
  reducers:{

    getCoinData(state, action){
      state.response = action.payload
    }

  }
})


const login = { loggedIn: false };

const loginSlice = createSlice({
  name: "login",
  initialState: login,
  reducers: {
    loggedIn(state) {
      state.loggedIn = true;
    },
    loggedout(state) {
      state.loggedIn = false;
    }
  },
});


const detail = { visible: false ,  };

const detailSlice = createSlice({
  name: "detail",
  initialState: detail,
  reducers: {
    visible(state) {
      state.visible = true;
    },
    notVisible(state) {
      state.visible = false;
    }
  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer, detail: detailSlice.reducer , logg: loginSlice.reducer , coinData : apiSlice.reducer },
});

export const apiDataAction = apiSlice.actions;  

export const loginAction = loginSlice.actions;

export const detailActions = detailSlice.actions;

export const authActions = authSlice.actions;

export default store;

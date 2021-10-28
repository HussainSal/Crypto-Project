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

const detail = { visible: false  }

const detailSlice = createSlice({
  name: "detail",
  initialState: detail,
  reducers: {
    visible(state) {
      state.visible = !this.visible;
    },

  },
});

const store = configureStore({
  reducer: { auth: authSlice.reducer , detail: detailSlice.reducer },
});


export const detalActions = detailSlice.actions;

export const authActions = authSlice.actions;

export default store;

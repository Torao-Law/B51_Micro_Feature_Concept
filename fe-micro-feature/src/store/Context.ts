// export const ActionUser = (background: any) => {
//   const { type, payload } = background;

//   switch (type) {
//     case "USER_SUCCESS":
//     case "LOGIN_SUCCESS":
//       localStorage.setItem("token", payload.token);

//       return {
//         isLogin: true,
//         user: payload,
//       };
//     case "AUTH_ERROR":
//     case "LOGOUT":
//       localStorage.removeItem("token");

//       return {
//         isLogin: false,
//         user: {},
//       };
//     default:
//       throw new Error();
//   }
// }

// export type Action = | ReturnType<typeof ActionUser>


// export const login = (
//   background: string
// ): {
//   type: "LOGIN_SUCCESS";
//   payload: {
//     background: string;
//   };
// } => ({
//   type: "LOGIN_SUCCESS",
//   payload: {
//     background
//   }
// });

// export const logout = (
//   background: string
// ): {
//   type: "LOGOUT";
//   payload: {
//     background: string;
//   };
// } => ({
//   type: "LOGOUT",
//   payload: {
//     background
//   }
// });

// export type Action =
//   | ReturnType<typeof login>
//   | ReturnType<typeof logout>;





// import { createContext, useReducer, useState } from "react";
// import { UserReducer } from "./Reducer";

// type User = {
//   isLogin: boolean
//   user: {}
// }

// const initialState = {
//   isLogin: false,
//   user: {}
// }

// const UserContext = createContext<{
//   state: User,
//   dispatch: React.Dispatch<any>
// }>({
//   state: initialState,
//   dispatch: () => null
// })

// const MainReducer = ({ user }: any, action: any) =>({
//   user: UserReducer(user, action)
// })

// const ContextProvider = ({ children }: any) => {
//   const [state, dispatch] = useReducer(MainReducer, initialState)

//   return (
//     <UserContext.Provider value={{state, dispatch}}>
//       {children}
//     </UserContext.Provider>
//   )
// }

// export { UserContext, ContextProvider}





import React, { createContext, useReducer, Dispatch } from "react";
import {
  productReducer,
  shoppingCartReducer,
  ProductActions,
  ShoppingCartActions
} from "./Reducer";

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type InitialStateType = {
  products: ProductType[];
  shoppingCart: number;
};

const initialState = {
  products: [],
  shoppingCart: 0
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ProductActions | ShoppingCartActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { products, shoppingCart }: InitialStateType,
  action: ProductActions | ShoppingCartActions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

// import { createContext, useReducer } from "react";

// const initialState = {
//   isLogin: false,
//   user: {},
// };

// export const UserContext = createContext(initialState);

// const reducer = (state: any, action: any) => {
//   const { type, payload } = action;

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
// };

// export const UserContextProvider = ({ children }: any) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <UserContext.Provider value={state}>
//       {children}
//     </UserContext.Provider>
//   );
// };










// // import React, { createContext, useReducer, ReactNode } from "react";

// // interface User {
// //   id?: number;
// //   username?: string;
// //   // Tambahkan properti lain sesuai kebutuhan
// // }

// // interface State {
// //   isLogin: boolean;
// //   user: User;
// // }

// // interface UserSuccessAction {
// //   type: "USER_SUCCESS" | "LOGIN_SUCCESS";
// //   payload: { token: string; user: User };
// // }

// // interface AuthErrorAction {
// //   type: "AUTH_ERROR" | "LOGOUT";
// // }

// // type Action = UserSuccessAction | AuthErrorAction;

// // const initialState: State = {
// //   isLogin: false,
// //   user: {},
// // };

// // const reducer = (state: State, action: Action): State => {
// //   switch (action.type) {
// //     case "USER_SUCCESS":
// //     case "LOGIN_SUCCESS":
// //       localStorage.setItem("token", action.payload.token);
// //       return {
// //         isLogin: true,
// //         user: action.payload.user,
// //       };
// //     case "AUTH_ERROR":
// //     case "LOGOUT":
// //       localStorage.removeItem("token");
// //       return {
// //         isLogin: false,
// //         user: {},
// //       };
// //     default:
// //       throw new Error();
// //   }
// // };

// // interface UserContextProps {
// //   state: State;
// //   dispatch: React.Dispatch<Action>;
// // }

// // const UserContext = React.createContext<UserContextProps>(initialState)

// // interface UserContextProviderProps {
// //   children: React.ReactNode;
// // }

// // const UserContextProvider = (props: UserContextProviderProps) => {
// //   const [state, dispatch] = useReducer(reducer, initialState);

// //   return (
// //     <UserContext.Provider value={{ state, dispatch }}>
// //       {props.children}
// //     </UserContext.Provider>
// //   );
// // };


// // expoort { UserContextProvider, UserContext }



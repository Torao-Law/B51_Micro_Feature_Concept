// import { initialState, reducer, type Store } from "./ReducerUser";
// import type { Action } from "./ActionUser";
// import React, { createContext, useReducer } from "react";

// interface UserContextProviderProps {
//   children: React.ReactNode;
// }



// const [state, dispatch] = useReducer<React.Reducer<Store, Action>>(
//   reducer,
//   initialState
//   )

  
//   const UserContextProvider = (props: UserContextProviderProps) => {
//     // //   const [state, dispatch] = useReducer(reducer, initialState);
//   const UserContext = createContext(state)

//   return (
//     <UserContext.Provider value={{ state, dispatch }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };
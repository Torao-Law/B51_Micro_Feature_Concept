// import type { Action } from "./ActionUser";

// export const initialState =  {
//   isLogin: false,
//   user: {},
// }

// export type Store = typeof initialState;

// export const reducer = (state: Store, action: Action) => {
//   console.log(action)
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       // localStorage.setItem("token", action.payload.token);
//       return {
//         isLogin: true,
//         user: state.user,
//       };
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


// export const UserReducer = (state: any, action: any) => {
//   switch(action.type) {
//     case "LOGIN_SUCCESS":
//       localStorage.setItem("token", action.payload.token);
//       return {
//         isLogin: true,
//         user: state.user,
//       };
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


type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Create = "CREATE_PRODUCT",
  Delete = "DELETE_PRODUCT",
  Add = "ADD_PRODUCT"
}

// Product

type ProductType = {
  id: number;
  name: string;
  price: number;
};

type ProductPayload = {
  [Types.Create]: {
    id: number;
    name: string;
    price: number;
  };
  [Types.Delete]: {
    id: number;
  };
};

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>];

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ];
    case Types.Delete:
      return [...state.filter(product => product.id !== action.payload.id)];
    default:
      return state;
  }
};

// ShoppingCart

type ShoppingCartPayload = {
  [Types.Add]: undefined;
};

export type ShoppingCartActions = ActionMap<
  ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1;
    default:
      return state;
  }
};

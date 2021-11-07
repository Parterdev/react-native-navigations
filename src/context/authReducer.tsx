import { AuthState } from "./AuthContext";

type AuthAction = 
  | { type: 'signIn' }
  | { type: 'changeFavIcon', payload: string }
  | { type: 'logout' }
  | { type: 'setUserName', payload: string}


//Genera un nuevo estado en base a una acción recibida
export const authReducer = (state: AuthState, action: AuthAction):AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-ser-yet'
      }
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    case 'setUserName':
      return {
        ...state,
        username: action.payload
      }
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined
      }
    default:
      return state;
  }
}
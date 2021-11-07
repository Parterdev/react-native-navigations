import React, { createContext, useReducer } from "react"
import { authReducer } from "./authReducer";


//Definir como luce o qué información habrá aquí


export interface AuthState {
  isLoggedIn: boolean,
  username?: string,
  favoriteIcon?: string,
}

//Estado inicial (cuando la aplicacion se lanza)
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined
}

//Definimos todo lo que el context va a compartir con sus hijos
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  setUserName: (username:string) => void;
  changeFavoriteIcon: (iconName: string) => void,
}



//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Exponemos el proveedor del estado
export const AuthProvider = ({ children }: any) => {
  

  //Utilizamos useReducer para efectuar eventos que cambien nuestro estado (similar al useState)
  //El reducer se encargará de devolver los cambios efectuados en el state (con entrada de args)
  //El dispatch accionará enventos que serán ejectutados en el reducer
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  //Actions
  const signIn = () => {
    dispatch({type: 'signIn'});
  }

  const changeFavoriteIcon = (iconName:string) => {
    dispatch({type: 'changeFavIcon', payload: iconName})
  }

  const logout = () => {
    dispatch({type: 'logout'});
  }

  const setUserName = (username:string) => {
    dispatch({type: 'setUserName', payload: username})
  }


  return (
    <AuthContext.Provider value={{
      authState,
      signIn,
      logout,
      setUserName,
      changeFavoriteIcon
    }}>
      {children}
    </AuthContext.Provider>
  )
}

